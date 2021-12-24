// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./RewardERC20.sol";
import "./MmcCrossMATIC.sol";

// import "./IIERC721.sol";

contract MmcStaking is Ownable {
    using Strings for string;
    using SafeMath for uint256;
    MmcCrossMATIC public NFT;
    RewardERC20 public RewardERC20Token;

    struct Staker {
        address walletAddr;
        uint256 stakesAmount;
        uint256 rewardsAmount;
        uint256 lastUpdateTime;
        uint256[] _tokenIds;
    }

    /**
     * @notice The accumulated stake status for each stakeholder.
     */
    mapping(address => Staker) public stakers;
    address[] public stakerActs;
    uint256 rewardRate; // 20tokenAmount per NFT per day
    mapping(uint256 => uint256) indexOftokenId;
    mapping(uint256 => address) private _owners;

    event MintNFTFinished(address _user, uint256 _tokenId, uint256 mintedAt);
    event MintNFTBatchFinished(
        address _user,
        uint256[] _tokenIds,
        uint256 mintedAt
    );
    event StakeFinished(
        address indexed _user,
        uint256 tokenId,
        uint256 _stakesAmount
    );
    event StakeBatchFinished(
        address indexed _user,
        uint256[] tokenIds,
        uint256 _stakesAmount
    );
    event withdrawFinished(
        address indexed _user,
        uint256 tokenId,
        uint256 _stakesAmount
    );
    event withdrawBatchFinished(
        address indexed _user,
        uint256[] tokenIds,
        uint256 _stakesAmount
    );
    event RewardPaid(address indexed _user, uint256 reward);

    /**
     * @dev Creates a staking contract that handles the staking, withdraw, claim features
     */
    constructor(RewardERC20 _tokenAddress, MmcCrossMATIC _nftAddress) {
        RewardERC20Token = _tokenAddress;
        NFT = _nftAddress;
    }

    /// @notice Stake NFTs.
    function stake(uint256 tokenId) external {
        require(
            NFT.balanceOf(msg.sender) >= 1,
            "Please deposite more in your card!"
        );
        _stake(msg.sender, tokenId);
        Staker storage staker = stakers[msg.sender];
        staker.stakesAmount += 1;
        staker._tokenIds.push(tokenId);
        updateStakeList(msg.sender);

        emit StakeFinished(msg.sender, tokenId, staker.stakesAmount);
    }

    /// @notice Stake multiple NFTs.
    function stakeBatch(uint256[] memory tokenIds) external {
        require(
            tokenIds.length > 0,
            "The amount to be stacked should be larger than 0"
        );
        require(
            NFT.balanceOf(msg.sender) >= tokenIds.length,
            "Please deposite more in your card!"
        );

        Staker storage staker = stakers[msg.sender];
        for (uint256 i = 0; i < tokenIds.length; i++) {
            _stake(msg.sender, tokenIds[i]);
            staker._tokenIds.push(tokenIds[i]);
        }
        staker.stakesAmount += tokenIds.length;
        updateStakeList(msg.sender);

        emit StakeBatchFinished(msg.sender, tokenIds, staker.stakesAmount);
    }

    function _stake(address _user, uint256 _tokenId) internal {
        Staker storage staker = stakers[_user];

        NFT.transferFrom(msg.sender, address(this), _tokenId);
        staker.rewardsAmount = updateReward(msg.sender);

        // emit Staked(_user, _tokenId);
    }

    /// @notice Withdraw NFTs.
    function withdraw(uint256 tokenId) external {
        Staker storage staker = stakers[msg.sender];
        require(
            staker.stakesAmount >= 1,
            "The amount to be withdrawed should be less than Deposit"
        );

        _withdraw(msg.sender, tokenId);
        staker.stakesAmount -= 1;
        updateStakeList(msg.sender);

        emit withdrawFinished(msg.sender, tokenId, staker.stakesAmount);
    }

    /// @notice Withdraw multiple NFTs.
    function withdrawBatch(uint256[] memory tokenIds) external {
        Staker storage staker = stakers[msg.sender];
        require(
            tokenIds.length > 0,
            "The amount to be withdrawed should be larger than 0"
        );
        require(
            tokenIds.length <= staker.stakesAmount,
            "The amount to be withdrawed should be less than Deposit"
        );

        for (uint256 i = 0; i < tokenIds.length; i++) {
            _withdraw(msg.sender, tokenIds[i]);
        }
        staker.stakesAmount -= tokenIds.length;
        updateStakeList(msg.sender);

        emit withdrawBatchFinished(msg.sender, tokenIds, staker.stakesAmount);
    }

    function _withdraw(address _user, uint256 _tokenId) internal {
        Staker storage staker = stakers[_user];
        require(staker.stakesAmount > 0, "No stake");

        for (uint256 i = 0; i < staker._tokenIds.length; i++) {
            if (staker._tokenIds[i] == _tokenId) {
                NFT.transferFrom(address(this), msg.sender, _tokenId);
                staker.rewardsAmount = updateReward(msg.sender);
                staker._tokenIds[i] = staker._tokenIds[
                    staker._tokenIds.length - 1
                ];
                staker._tokenIds.pop();
            }
        }
    }

    /**
     * @notice Claim ERC20 reward tokens.
     */
    function claim() public returns (bool) {
        Staker storage staker = stakers[msg.sender];

        require(staker.rewardsAmount != 0, "No stake, No rewards yet");

        staker.rewardsAmount = updateReward(msg.sender);
        uint256 getRewardAmount = staker.rewardsAmount;
        RewardERC20Token.mintRewardToken(msg.sender, staker.rewardsAmount);
        staker.rewardsAmount = 0;
        updateStakeList(msg.sender);

        emit RewardPaid(msg.sender, getRewardAmount);

        return true;
    }

    /**
     * @notice A method to calcaulate the stake rewards for a stakeholder for all transactions.
     * @param _account The stakeholder to retrieve the stake rewards for.
     * @return uint256 The amount of reward tokens.
     */
    function updateReward(address _account) public view returns (uint256) {
        Staker storage staker = stakers[_account];
        if (staker.stakesAmount == 0) {
            return staker.rewardsAmount;
        }
        return
            staker.rewardsAmount.add(
                block
                    .timestamp
                    .sub(staker.lastUpdateTime)
                    .mul(staker.stakesAmount)
                    .mul(rewardRate)
                    .div(86400)
            );
    }

    /**
     * @notice A method to update or push stake status for all transactions.
     * If an account is new, push his stake status while an already existing user, update them.
     * @param account The stakeholder to retrieve the stake status.
     */
    function updateStakeList(address account) public {
        Staker storage staker = stakers[account];

        if (staker.lastUpdateTime == 0) {
            stakerActs.push(account);
        }
        staker.lastUpdateTime = block.timestamp;
    }

    /**
     * @notice A method to retrieve the stake for a stakeholder.
     * @param _stakeholder The stakeholder to retrieve the stake for.
     * @return uint256 The amount of ethers.
     */
    function stakeOf(address _stakeholder) public view returns (uint256) {
        Staker storage staker = stakers[_stakeholder];
        return staker.stakesAmount;
    }

    /**
     * @notice A method to retrieve the rewards for a stakeholder.
     * @param _stakeholder The stakeholder to retrieve the rewards for.
     * @return uint256 The amount of ethers.
     */
    function rewardOf(address _stakeholder) public view returns (uint256) {
        Staker storage staker = stakers[_stakeholder];
        return staker.rewardsAmount;
    }

    function _exists(uint256 tokenId) public view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }
}
