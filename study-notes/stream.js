const fs = require("node:fs")

const readable = fs.createReadStream("./me.txt", {
    encoding: "utf-8",
});

const writeableStream = fs.createWriteStream("./me.txt");

readable.on("data", (chunk) => {
    console.log(chunk);
    
})