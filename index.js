const http = require('http')
const app = require('./app')

const PORT = 3502
http
  .createServer(app)
  .listen(PORT, () => console.log(`SERVER RUNS ON PORT ${PORT}`))
