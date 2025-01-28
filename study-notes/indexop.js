// const crypto = require("node:crypto");

// const start = Date.now();
// crypto.pbkdf2Sync("passward","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("passward","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("passward","salt",10000,512,"sha512")

// console.log("Hash",Date.now() - start);


// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 0)

// fs.readFile(__filename, () => {
//     console.log("This is readFile 1");

// })

// process.nextTick(()=> console.log("This is process.nextTick 1"));
// Promise.resolve().then( ()=> console.log("This is process.nextTick 2"))
// setTimeout(()=> console.log("This is setTimeout 1"),0);

// for(let i = 0 ; i < 2000000; i++){

// }

const OS = require("node:os")

console.log(OS.cpus().length);
