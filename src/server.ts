import http, { IncomingMessage, ServerResponse } from "http"
import *as url from "url";

const hostname: string = 'localhost';
const port: number = 5000;

http.createServer((request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    // let _url = request.url;
    // let parsedUrl = url.parse(_url!, true);
    // let queryParms = parsedUrl.query;
    // let filterQuery = queryParms.value


    let _url = request.url;
    let queryParms = url.parse(_url!).query;
    let filterQuery = queryParms?.split("=").pop()!.replaceAll("%27", " ").replaceAll("%20", ' ').replaceAll("%22", " ");
    let path = url.parse(_url!).pathname;

    if (filterQuery === undefined) {
        filterQuery = 'No Query Found'
    }
    
    response.setHeader('content-type', 'text/html')
    response.write(`<h1>Shahwaiz First Server of Node JS</h1> <br> <h2>${filterQuery}</h2><br><h3>${path}</h3>`);
    
    response.end()
}).listen(port, hostname, () => {
    console.log('Server Is Running');
    console.log(`http://${hostname}:${port}`)
})