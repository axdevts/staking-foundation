import { Users } from '../database/models'

import {
  ContractAddress,
  mumbaiNet,
  ownerAddr,
  ownerPK,
  RELAYER_GAS,
  RELAYER_GAS_PRICE
} from '../utils'

const crossMaticAbi = require('../utils/abis/mmcCrossMatic.json')
const Web3 = require('web3')

export const mintController = () => {

  const crossMaticAddr = ContractAddress.polygonTestnet.mmcCrossMatic

  const mintPoly = async (req, res, next) => {
    const userAddr = req.body.walletAddress
    const users = await Users.findAll();

    const web3Mumbai = new Web3(new Web3.providers.HttpProvider(mumbaiNet))
    const maticContract = new web3Mumbai.eth.Contract(crossMaticAbi, crossMaticAddr)

    web3Mumbai.eth.accounts.wallet.add({
      privateKey: ownerPK,
      address: ownerAddr
    })

    // await getGasPrice()

    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        console.log('user info ---', users[i].walletAddress, '/', users[i].tokenIds)
        try {
          const data = await maticContract.methods.mintNFT(users[i].walletAddress, users[i].tokenIds)
            .send({
              from: ownerAddr,
              gasPrice: RELAYER_GAS_PRICE,
              gas: RELAYER_GAS,
            })

          console.log('data >>>>', data)
          return res.status(200).json({ success: true })
        } catch (error) {
          console.log(error, i)
          await Users.update({ status: 'failed' }, { where: { tokenIds: i } });
        }
      }
    }
  }

  return { mintPoly }
};
