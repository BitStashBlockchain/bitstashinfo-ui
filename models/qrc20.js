import * as BitstashinfoAPI from '@/services/bitstashinfo-api'

class Qrc20 {

  static getTransaction(options = {}) {
    return BitstashinfoAPI.get('/qrc20/txs', options)
  }
}

export default Qrc20
