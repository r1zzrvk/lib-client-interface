/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server')
const clone = require('clone')
const data = require('db.json')

const isProductionEnv = process.env.NODE_ENV === 'production'
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 4242

const router = jsonServer.router(isProductionEnv ? clone(data) : 'db.json', {
  _isFake: isProductionEnv,
})

server.use(middlewares)
server.use((req, res, next) => {
  if (req.path !== '/') router.db.setState(clone(data))
  next()
})

server.use(router)
server.listen(PORT, () => {
  console.log(`JSON Server is running on port:${PORT}`)
})

module.exports = server
