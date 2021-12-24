const { ethers, upgrades } = require("hardhat");

async function main() {
	const StakeInstance = await ethers.getContractFactory("MmcStaking");
	const StakeContract = await StakeInstance.deploy('0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5', '0xe4046577e7cc88ba8806d6b62f5a7ba05fd2fe69');
	console.log("Staking Contract is deployed to:", StakeContract.address);
}

main();