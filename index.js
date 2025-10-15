const http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) {
    console.log(req);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
        </head>
        <body>
            <h1>Tanvir Hossain Parvin</h1>
            <h2>Computer Science Student @ Goldsmiths</h2>
            <p>passionate about tech and coding and worked in diverse job roles</p>
            <p>\n I created and set up a virtual machine to run a node.js server</p>
        </body>
        </html>
    `);
    }).listen(port, function() { 
        console.log(`node server is running on port ${port}...`); 
}); 


