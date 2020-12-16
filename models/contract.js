import * as BitstashinfoAPI from '@/services/bitstashinfo-api'

class Contract {
  static get(id, options = {}) {
    return BitstashinfoAPI.get(`/contract/${id}`, options)
  }

  static getQrc20(id, options = {}) {
    return BitstashinfoAPI.get(`/qrc20/txs`, options)
  }
  static getUtxo(id, options = {}) {
    return BitstashinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/qrc20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return BitstashinfoAPI.get(`/qrc20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
