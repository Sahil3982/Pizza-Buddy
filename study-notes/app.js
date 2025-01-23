const http = require("node:http");
const fs = require("node:fs")
const server = http.createServer((req, res) => {

    res.end(req.url);
});

server.listen(3000, () =>{
    console.log("Server running on port 3000");    
}); 





// const http = require("node:http");
// const fs = require("node:fs");
// const querystring = require("querystring");  // To parse the POST data

// const server1 = http.createServer((req, res) => {

//     // Serve the HTML form
//     if (req.method === "GET") {
//         const html = fs.readFileSync("index.html", "utf-8");
//         res.writeHead(200, { "content-type": "text/html", "cookie": "Hello" });
//         res.end(html);
//     }
//     // Handle form submission (POST request)
//     else if (req.method === "POST") {
//         let body = '';
        
//         // Collect the form data
//         req.on('data', chunk => {
//             body += chunk;
//         });
        
//         // Once all data is collected, parse it and process the form
//         req.on('end', () => {
//             const formData = querystring.parse(body);
//             const name = formData.name;
//             const email = formData.email;

//             // Send a response with the received data
//             res.writeHead(200, { "content-type": "text/html" });
//             res.end(`<h1>Thank you, ${name}!</h1><p>Your email: ${email} has been received.</p>`);
//         });
//     }
// });

// server1.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
