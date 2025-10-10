const http = require("http"); 
const port = 8000; 

const htmlContent = `
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
    <p>passionate about tech and coding and worked in diverse job roles
    </p>
</body>
</html>
`;

http.createServer(function(req, res) {
    console.log(req);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    }).listen(port, function() { 
        console.log(`node server is running on port ${port}...`); 
}); 
