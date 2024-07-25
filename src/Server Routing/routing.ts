import http, { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export class Routing {
    static ServerRouting(response: ServerResponse, request: IncomingMessage) {
        let method = request.method;
        let pathName = url.parse(request.url!).pathname;

        if (pathName == "/createuser" && method == 'POST') {
            let body = "";

            request.on('data', (chunk) => {
                body += chunk;
            }).on('end', () => {
                try {
                    let JsonResponse = JSON.parse(body);
                    console.log(JsonResponse);
                    response.statusCode = 200;
                    response.end(`${JsonResponse.name} Created Successfully`);
                } catch (error) {
                    console.error("Failed to parse JSON:", error);
                    response.statusCode = 400;
                    response.end("Invalid JSON received");
                }
            });
        } else {
            response.statusCode = 404;
            response.end("Not Found");
        }
    }
}


