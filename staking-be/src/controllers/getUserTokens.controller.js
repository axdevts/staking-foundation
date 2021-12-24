import { Users } from '../database/models'

import {
  ContractAddress,
  ethMainNet,
} from '../utils'

const mmcAbi = require('../utils/abis/mmc.json')
const Web3 = require('web3')

export const getUsersTokensController = () => {

  const mmcAddr = ContractAddress.mainnet.mmc

  const getUsersTokenIds = async (req, res, next) => {
    const userAddr = req.body.walletAddress

    const web3MainEth = new Web3(new Web3.providers.HttpProvider(ethMainNet))
    const mmcContract = new web3MainEth.eth.Contract(mmcAbi, mmcAddr)

    try {
      const maxTokens = await mmcContract.methods.MAX_TOKENS().call()
      const maxTokensNum = 1 * maxTokens;
      for (let tokenIds = 0; tokenIds < maxTokensNum; tokenIds++) {
        const walletAddress = await mmcContract.methods.ownerOf(tokenIds).call()
        console.log('list Tokens', walletAddress)
        let data = await Users.findOne({ where: { tokenIds } })
        if (!data) {
          data = await Users.create({ walletAddress, tokenIds });
        } else {
          return res.status(400).json({ error: 'WalletAddress already registered.' })
        }

      }
      res.status(200).json({ success: "Success" })
    } catch (error) {
      console.log(error)
    }
  }

  const getUserTokens = () => {

  }

  return { getUsersTokenIds, getUserTokens }
};
