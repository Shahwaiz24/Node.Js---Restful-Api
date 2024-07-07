import http, { IncomingMessage, ServerResponse } from "http"

const hostname: string = 'localhost';
const port: number = 5000;

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain')
    res.write('First Server of Node Js');
    
    res.end()
}).listen(port, hostname, () => {
    console.log('Server Is Running');
    console.log(`http://${hostname}:${port}`)
})