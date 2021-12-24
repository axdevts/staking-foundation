const { ethers, upgrades } = require("hardhat");

async function main() {
	const CrossMATICInstance = await ethers.getContractFactory("MmcCrossMATIC");
	const CrossMATICContract = await CrossMATICInstance.deploy();
	console.log("CrossMATIC Contract is deployed to:", CrossMATICContract.address);
}

main();