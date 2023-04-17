const badRequestError = (req, res, next)=>{
  const err = new Error("Bad user request")
  err.status = 400
  return next(err)
}

const notFound = (req, res, next)=>{
  const err = new Error("Resource not found")
  err.status = 404
  return next(err)
}



module.exports = {
  badRequestError,
  notFound,
}