const http = require('http');
const url = require('url');


let port = 8080;

let server = http.createServer(function(request, response){

    let method = request.method;
    let _url = request.url;

    console.log('connected');
    console.log('method:',method,'url:', _url);

    let parsed = url.parse(request.url, true);
    console.log(parsed);


    if(parsed.pathname == '/test' && parsed.query.message){
        response.statusCode = 200;
        response.end(parsed.query.message);
    } else {
        response.statusCode = 404;
        response.end('404');
    }


}).listen(port,function(){
    console.log('server running on port ', port);
});
