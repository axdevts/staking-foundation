const { ethers, upgrades } = require("hardhat");

async function main() {
	const CrossETHInstance = await ethers.getContractFactory("MmcCrossETH");
	const CrossETHContract = await CrossETHInstance.deploy();
	console.log("CrossETH Contract is deployed to:", CrossETHContract.address);
}

main();