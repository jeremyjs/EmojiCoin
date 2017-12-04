import { createStore } from 'redux'

import { UPDATE_SEND_WALLET_ADDRESS } from './actionTypes'
import createReducer from './createReducer'
import initialState from './initialState'

const reducer = createReducer(initialState, {
  UPDATE_SEND_WALLET_ADDRESS: (state, action) => ({
    sendWalletAddress: action.text
  })
})

const store = createStore(reducer)

export default store
