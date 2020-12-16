import * as BitstashinfoAPI from '@/services/bitstashinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BitstashinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return BitstashinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BitstashinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return BitstashinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return BitstashinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return BitstashinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
