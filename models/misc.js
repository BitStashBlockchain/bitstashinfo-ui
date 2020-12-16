import * as BitstashinfoAPI from '@/services/bitstashinfo-api'

class Misc {
  static info(options = {}) {
    return BitstashinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return BitstashinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return BitstashinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return BitstashinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return BitstashinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return BitstashinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return BitstashinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
