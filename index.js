const http = require('http')
const app = require('./app')

const PORT = 777

http
  .createServer(app)
  .listen(PORT, () => console.log(`SERVER RUNS ON PORT ${PORT}`))
