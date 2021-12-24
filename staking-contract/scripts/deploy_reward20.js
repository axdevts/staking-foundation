const { ethers, upgrades } = require("hardhat");

async function main() {
	const baseInstance = await ethers.getContractFactory("RewardERC20");
	const RewardContract = await baseInstance.deploy();
	console.log("Reward20 Contract is deployed to:", RewardContract.address);
}

main();