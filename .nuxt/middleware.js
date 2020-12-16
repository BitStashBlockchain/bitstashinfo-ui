const middleware = {}

middleware['check-address'] = require('../middleware/check-address.js');
middleware['check-address'] = middleware['check-address'].default || middleware['check-address']

middleware['ip'] = require('../middleware/ip.js');
middleware['ip'] = middleware['ip'].default || middleware['ip']

export default middleware
