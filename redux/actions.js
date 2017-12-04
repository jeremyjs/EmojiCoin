import { UPDATE_SEND_WALLET_ADDRESS } from './actionTypes'

const bitcoinAddress = (text) => text.replace('bitcoin:', '')

export const updateSendWalletAddress = (text) => ({
  type: UPDATE_SEND_WALLET_ADDRESS,
  text: bitcoinAddress(text)
})
