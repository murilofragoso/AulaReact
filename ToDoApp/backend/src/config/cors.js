module.exports = function(req, res, next){
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    res.header('Acess-Control-Allow-Headers', 'Origins, X-Request-With, Content-Type, Accept')
    next()
}