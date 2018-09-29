const http = require('http')
const app = require('./app')

try {
  const { PORT } = process.env
  
  http
    .createServer(app)
    .listen(PORT, () => console.log(`SERVER RUNS ON PORT ${PORT}`))

} catch (error) {
  console.log(error)
}


