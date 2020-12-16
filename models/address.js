import * as BitstashinfoAPI from '@/services/bitstashinfo-api'

class Address {
  static get(id, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/address/${id}/qrc20-balance-history`, {params: {token, page, pageSize}, ...options})
  }
}

export default Address
