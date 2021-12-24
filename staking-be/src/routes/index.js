import express from 'express'
import {
  getUsersTokensController,
  mintController,
  stakingController,
  withdrawController,
  claimController
} from '../controllers'

const indexRouter = express.Router()

indexRouter.post('/user-tokens', getUsersTokensController().getUsersTokenIds)
indexRouter.post('/get-tokens', getUsersTokensController().getUserTokens)
indexRouter.post('/mint', mintController().mintPoly)
indexRouter.post('/staking', stakingController().staking)
indexRouter.post('/staking-batch', stakingController().stakingBatch)
indexRouter.post('/withdraw', withdrawController().withdraw)
indexRouter.post('/withdraw-batch', withdrawController().withdrawBatch)
indexRouter.post('/claim', claimController().claim)
indexRouter.post('/claim-batch', claimController().claimBatch)

export default indexRouter
