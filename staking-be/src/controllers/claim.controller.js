import { Users } from '../database/models'

import {
  ContractAddress,
  mumbaiNet,
  RELAYER_GAS,
  RELAYER_GAS_PRICE
} from '../utils'

const stakingAbi = require('../utils/abis/staking.json')
const Web3 = require('web3')

export const claimController = () => {

  const stakingAddr = ContractAddress.polygonTestnet.staking

  const claim = async (req, res, next) => {
    const walletAddress = req.body.walletAddress

    const web3Mumbai = new Web3(new Web3.providers.HttpProvider(mumbaiNet))
    const stakingContract = new web3Mumbai.eth.Contract(stakingAbi, stakingAddr)
    let data = await Users.findOne({ where: { walletAddress } })

    if (data.length > 0) {
      try {
        const stakingData = await stakingContract.method.claim(data.tokenIds)
          .send({
            from: walletAddress,
            gasPrice: RELAYER_GAS_PRICE,
            gas: RELAYER_GAS,
          })
        console.log('list nfts', stakingData)

      } catch (error) {
        console.log(error)
      }
    }
  }

  const claimBatch = async (req, res, enxt) => {
    const userAddr = req.body.walletAddress

    const web3Mumbai = new Web3(new Web3.providers.HttpProvider(mumbaiNet))
    const stakingContract = new web3Mumbai.eth.Contract(stakingAbi, stakingAddr)
    let data = await Users.findAll({ where: { userAddr } })

    let nftTokenIDs = []

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        nftTokenIDs.push(data[i].tokenIds)
      }

      try {
        const stakingData = await stakingContract.method.claimBatch(nftTokenIDs)
          .send({
            from: userAddr,
            gasPrice: RELAYER_GAS_PRICE,
            gas: RELAYER_GAS,
          })
        console.log('list nfts', stakingData)

      } catch (error) {
        console.log(error)
      }
    }
  }

  return { claim, claimBatch }
};
