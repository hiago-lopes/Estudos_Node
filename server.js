const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log(`[NETWORK] Inbound Request: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api/status') {
        
        if(req.method === 'GET') {

            res.writeHead(200);
            res.end(JSON.stringify({
                status: "Online",
                ambiente: 'Desenvolvimento'
            }));
            return;
        }

        else {
            res.setHeader('Allow' ,'GET');
            res.writeHead(405);
            res.end(JSON.stringify({
                erro: 'Metodo nao permitido. Esta rota aceita apenas GET.'
            }));
            return;
        }
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        erro: 'Rescurso nao encontrado no servidor.'
    }));

});

server.listen(PORT, () => {
    console.log(`[SYSTEM] Router Engine online on port ${PORT}.`);

});