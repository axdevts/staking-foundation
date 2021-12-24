//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardERC20 is ERC20, Ownable {
    /**
     * @dev Sets the values for {name} and {symbol}.
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor() ERC20("Rewarding", "GLD") {}

    /** @dev Allows the only owner to mint
     * Create `amount` of tokens and reward them to `beneficiary`
     */
    function mintRewardToken(address beneficiary, uint256 amount)
        public
        onlyOwner
    {
        _mint(beneficiary, amount);
    }
}
