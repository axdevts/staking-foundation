const { ethers, upgrades } = require("hardhat");

async function main() {
	const StakeInstance = await ethers.getContractFactory("MmcStaking");
	const StakeContract = await StakeInstance.deploy('0x4CFBF140a872a86D81ed68E396c6C33CD5729078', '0xe4046577e7cc88ba8806d6b62f5a7ba05fd2fe69');
	console.log("Staking Contract is deployed to:", StakeContract.address);
}

main();