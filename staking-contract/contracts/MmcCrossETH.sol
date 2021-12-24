// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MmcCrossETH is ERC721, ERC721Enumerable, Ownable {
    using Strings for string;

    uint256 public constant MAX_TOKENS = 9200;
    uint256 public constant NUMBER_RESERVED_TOKENS = 300;
    uint256 public constant PRICE = 50000000000000000;

    uint256 public constant OG_SALE_MAX_TOKENS = 2000;
    uint256 public constant PRE_SALE_MAX_TOKENS = 2500;

    bool public saleIsActive = false;
    bool public ogSaleIsActive = false;
    bool public preSaleIsActive = false;

    uint256 public reservedTokensMinted = 0;
    uint256 public supply = 0;
    uint256 public preSaleSupply = 0;
    uint256 public ogSaleSupply = 0;
    string private _baseTokenURI;

    address payable private devguy =
        payable(0x0F7961EE81B7cB2B859157E9c0D7b1A1D9D35A5D);

    event BurnNFTFinished(address _user, uint256 _tokenId, uint256 burnedAt);
    event BurnNFTBatchFinished(
        address _user,
        uint256[] _tokenIds,
        uint256 burnedAt
    );

    constructor() ERC721("Magic Mushroom Clubhouse", "SHROOM") {}

    function burnNFT(uint256 _tokenId) public returns (uint256) {
        require(msg.sender == ownerOf(_tokenId), "Not owner");
        require(_exists(_tokenId), "TokenId not exist");

        _burn(_tokenId);

        emit BurnNFTFinished(msg.sender, _tokenId, block.timestamp);
        return _tokenId;
    }

    function burnNFTBatch(uint256[] memory _tokenIds)
        public
        returns (uint256[] memory)
    {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(msg.sender == ownerOf(_tokenIds[i]), "Not owner");
            require(_exists(_tokenIds[i]), "TokenId not exist");

            _burn(_tokenIds[i]);
        }

        emit BurnNFTBatchFinished(msg.sender, _tokenIds, block.timestamp);
        return _tokenIds;
    }

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId, "");
    }

    ////////////////
    function mintToken(uint256 amount) external payable {
        require(
            msg.sender == tx.origin,
            "No transaction from smart contracts!"
        );
        require(amount > 0 && amount <= 10, "Max 10 NFTs per transaction");
        require(saleIsActive, "Sale must be active to mint");
        require(
            supply + amount <=
                MAX_TOKENS - (NUMBER_RESERVED_TOKENS - reservedTokensMinted),
            "Purchase would exceed max supply"
        );
        require(msg.value >= PRICE * amount, "Not enough ETH for transaction");

        for (uint256 i = 0; i < amount; i++) {
            _safeMint(msg.sender, supply);
            supply++;
        }
    }

    function mintTokenOgSale(uint256 amount) external payable {
        require(
            msg.sender == tx.origin,
            "No transaction from smart contracts!"
        );
        require(ogSaleIsActive, "OG-sale must be active to mint");
        require(msg.value >= PRICE * amount, "Not enough ETH for transaction");
        require(
            ogSaleSupply + amount <= OG_SALE_MAX_TOKENS,
            "Purchase would exceed max supply for OG sale"
        );
        require(
            balanceOf(msg.sender) + amount <= 2,
            "Limit is 2 tokens per wallet, sale not allowed"
        );

        for (uint256 i = 0; i < amount; i++) {
            _safeMint(msg.sender, supply);
            supply++;
            ogSaleSupply++;
        }
    }

    function mintTokenPreSale(uint256 amount) external payable {
        require(
            msg.sender == tx.origin,
            "No transaction from smart contracts!"
        );
        require(preSaleIsActive, "Pre-sale must be active to mint");
        require(msg.value >= PRICE * amount, "Not enough ETH for transaction");
        require(
            preSaleSupply + amount <= PRE_SALE_MAX_TOKENS,
            "Purchase would exceed max supply for pre sale"
        );
        require(
            balanceOf(msg.sender) + amount <= 5,
            "Limit is 5 tokens per wallet, sale not allowed"
        );

        for (uint256 i = 0; i < amount; i++) {
            _safeMint(msg.sender, supply);
            supply++;
            preSaleSupply++;
        }
    }

    function flipSaleState() external onlyOwner {
        preSaleIsActive = false;
        ogSaleIsActive = false;
        saleIsActive = !saleIsActive;
    }

    function flipPreSaleState() external onlyOwner {
        saleIsActive = false;
        ogSaleIsActive = false;
        preSaleIsActive = !preSaleIsActive;
    }

    function flipOgSaleState() external onlyOwner {
        saleIsActive = false;
        preSaleIsActive = false;
        ogSaleIsActive = !ogSaleIsActive;
    }

    function mintReservedTokens(uint256 amount) external onlyOwner {
        require(
            reservedTokensMinted + amount <= NUMBER_RESERVED_TOKENS,
            "This amount is more than max allowed"
        );

        for (uint256 i = 0; i < amount; i++) {
            _safeMint(owner(), supply);
            supply++;
            reservedTokensMinted++;
        }
    }

    function withdraw() external {
        require(
            msg.sender == devguy || msg.sender == owner(),
            "Invalid sender"
        );

        uint256 devPart = (address(this).balance / 100) * 2;
        devguy.transfer(devPart);
        payable(owner()).transfer(address(this).balance);
    }

    ////
    //URI management part
    ////

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _setBaseURI(string memory baseURI) internal virtual {
        _baseTokenURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _setBaseURI(baseURI);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721)
        returns (string memory)
    {
        string memory _tokenURI = super.tokenURI(tokenId);
        return
            bytes(_tokenURI).length > 0
                ? string(abi.encodePacked(_tokenURI, ".json"))
                : "";
    }
}
