const { expect } = require("chai");
const { ethers } = require("hardhat");
const { expectRevert } = require('@openzeppelin/test-helpers');

let rewardERC20Instance;
let rewardERC20Contract;
let ethInstance;
let ethContract;
let MaticInstance;
let maticContract;
let owner, account1, account2, account3;
let tokenId = 2;
let tokenIds_1 = [1, 2, 3, 5];
let tokenIds_2 = [4, 6, 7, 8, 9];
let tokenDecimals = 18;
let rewardRate = 1000000;

describe("StakingRewards", () => {
	beforeEach(async () => {
		[owner, account1, account2, account3] = await ethers.getSigners();
		rewardERC20Instance = await ethers.getContractFactory("RewardERC20");
		rewardERC20Contract = await rewardERC20Instance.deploy();
		await rewardERC20Contract.deployed();

		ethInstance = await ethers.getContractFactory("MmcCrossETH");
		ethContract = await ethInstance.deploy();
		await ethContract.deployed();

		maticInstance = await ethers.getContractFactory("MmcCrossMATIC");
		maticContract = await maticInstance.deploy();
		await maticContract.deployed();

		stakeInstance = await ethers.getContractFactory("MmcStaking");
		stakeContract = await stakeInstance.deploy(rewardERC20Contract.address, maticContract.address);
		await stakeContract.deployed();
		//initially mint to all users for testing stake features
		await maticContract.mintNFTBatch(account1.address, tokenIds_1);
		await maticContract.mintNFTBatch(account2.address, tokenIds_2);

	});

	describe("cross-chain NFT", function () {
		it('cross-chain one NFT', async () => {
			let amount = 3;
			let tokenId = 2;

			await ethContract.safeMint(owner.address, 1);
			await ethContract.safeMint(owner.address, 2);
			await ethContract.safeMint(owner.address, 3);
			await ethContract.burnNFT(tokenId);
			// await maticContract.mintNFT(owner.address, tokenId);
			// expect(await maticContract.mintNFT(owner.address, tokenId)).to.be.ok;
		})
	})
	describe("when stake", function () {
		it("staking condition ", async () => {
			expect(await maticContract.balanceOf(account1.address)).to.be.equal(4);

		});
		it("stake success", async () => {
			// account1 stake
			await maticContract.connect(account1)
				.setApprovalForAll(stakeContract.address, true);
			await stakeContract.connect(account1).stake(2);
			expect(await maticContract.balanceOf(account1.address))
				.to.be.equal(3);
			expect(await stakeContract.stakeOf(account1.address))
				.to.be.equal(1);
			// account2 stake
			await maticContract.connect(account2)
				.setApprovalForAll(stakeContract.address, true);
			await stakeContract.connect(account2).stakeBatch(tokenIds_2);
			expect(await maticContract.balanceOf(account2.address))
				.to.be.equal(0);
			expect(await stakeContract.stakeOf(account2.address))
				.to.be.equal(5);
		});
	});
	describe("when withdraw", function () {

		it("withdraw fail when didn't stake yet", async () => {
			await expectRevert(stakeContract.connect(account1)
				.withdrawBatch(tokenIds_1),
				"The amount to be withdrawed should be less than Deposit"
			);
		});

		it("withdraw success", async () => {
			// account1 withdraw
			let tokenId = 2;
			await maticContract.connect(account1)
				.setApprovalForAll(stakeContract.address, true);
			await stakeContract.connect(account1)
				.stakeBatch(tokenIds_1);
			await stakeContract.connect(account1)
				.withdraw(2);
			expect(await maticContract.balanceOf(account1.address))
				.to.be.equal("1");
			expect(await stakeContract.stakeOf(account1.address))
				.to.be.equal("3");

			// account2 withdraw
			await maticContract.connect(account2)
				.setApprovalForAll(stakeContract.address, true);
			await stakeContract.connect(account2)
				.stakeBatch(tokenIds_2);
			await stakeContract.connect(account2)
				.withdrawBatch(tokenIds_2);
			expect(await maticContract.balanceOf(account2.address))
				.to.be.equal("5");
			expect(await stakeContract.stakeOf(account2.address))
				.to.be.equal("0");
		})
	});
	describe("when claim", function () {
		describe("cases of claim fail", function () {
			it("getreward fail when no rewards", async () => {
				await expectRevert(stakeContract.connect(account1).claim(),
					"No stake, No rewards yet"
				);
			});
		});
		describe("cases of claim success", function () {
			beforeEach(done => setTimeout(done, 500));
			it("success when withdraw right away of stake, i.e stakeAmounts is 0", async () => {
				// account1 staking
				await maticContract.connect(account1)
					.setApprovalForAll(stakeContract.address, true);
				await stakeContract.connect(account1)
					.stakeBatch(tokenIds_1);
				await stakeContract.connect(account1)
					.withdrawBatch(tokenIds_1);
				// setTimeout(500);
				rewardAmount = await stakeContract.rewardOf(account1.address);
				console.log("the amount of rewards is >>>>", rewardAmount);
				// getRewardsResult = await stakeContract.connect(account1).claim();

				// expect(getRewardsResult)
				//     .to.emit(stakeContract, 'RewardPaid')
				//     .withArgs(account1.address, rewardAmount);
				// expect(await stakeContract.rewardOf(account1.address)).to.be.equal(0);
			});
		});
	});
})