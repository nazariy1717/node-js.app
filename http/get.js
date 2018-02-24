const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let port = 8080;

const server = http.createServer(function(request,response){


    request.on('error',function(err){
        console.log(err);
    });

    if(request.url == '/'){

        let file_path = path.join(__dirname, 'index.html');
        fs.readFile(file_path, function(err,data){

            if(err){
                console.log(err);
                response.writeHead(404,{'Content-Type':'text/plain'});
                response.write('Not found');
            } else {
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data,toString());
            }

            response.end();
        });

    } else {
        response.writeHead(404,{'Content-Type':'text/plain'});
        response.write('Not found');
    }



}).listen(port);