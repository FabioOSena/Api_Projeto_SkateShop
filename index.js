const http = require('http'); 
const app = require('./app');

const port = 3000; 

const server = http.createServer(app);

server.listen(port, () => {
console.log('servidor iniciado com sucesso na porta 3000')
}); 