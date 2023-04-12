module.exports = {
  logUserRequestTimeAndPath:  (req, res, next) => {
    console.log(`The request arrived at: ${new Date()}, from this URL: ${req.originalUrl}`)
    next()
    },
  }