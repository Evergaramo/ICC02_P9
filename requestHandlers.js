var querystring = require("querystring");

function iniciar(response, postData) {
    console.log("Manipulador de peticion 'inicio' fue llamado.");
    fs = require('fs');
    fs.readFile('vista/index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });
}

function jugar(response, dataPosteada) {
    console.log("Manipulador de peticion 'jugar' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste el texto: : " +
    querystring.parse(dataPosteada)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.jugar = jugar;