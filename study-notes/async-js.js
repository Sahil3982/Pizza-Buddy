
const fs = require("node:fs/promises")
 fs.readFile("me.txt", "utf-8").
 then((data)=> console.log(data)).
 catch((error)=> console.log(error));



async function readFile() {
    try{
        const data = await fs.readFile("me3.txt","utf-8")
        console.log(data);
        
    }catch(error){
        console.log(error)
    }
}readFile()











// const fs = require("node:fs");
// console.log("First");

// const filecontent = fs.readFileSync("./me.txt", "utf-8");
// console.log(filecontent);

// console.log("second");

// fs.readFile("./me.txt","utf-8", (error , data)=>{
//     if (error) {
//         console.log("bye -bye",error);
        
//     }else{
//         console.log(data);
        
//     }
// })

// console.log("Third");
// fs.writeFileSync("me2.txt", "Hy sahil")
// fs.writeFile("me2.txt", " -Hy jeet" , { flag : "a"}, (error)=>{
//     if(error){
//         console.log(error);
        
//     }
//     else{
//         console.log("File Written");
        
//     }
// })

// // console.log("fs",filecontent);

