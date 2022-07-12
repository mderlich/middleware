const fs = require('fs');
const path = require('path');


function logMiddleware (req, res, next){
	let routeFile = path.resolve(__dirname, "../logs/userLogs.txt")
	fs.appendFileSync(routeFile, 'El usuario entro a la ruta: ' + req.url + '\n')
	next();
}

module.exports = logMiddleware;