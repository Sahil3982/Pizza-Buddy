
const path = require("path") // built in modules
// console.log(__filename);
// console.log(__dirname);
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log(path.join("/folder1","folder2","folder3","item.js"));
// console.log(path.join("/folder1","//folder2","folder3","item.js"));
// console.log(path.join("/folder1","../folder2","../folder3","item.js",__dirname,"data.json"));


// console.log(path.resolve("/folder1","folder2","folder3","item.js"));
// console.log(path.resolve("/folder1","//folder2","folder3","item.js"));
// console.log(path.join("/folder1","../folder2","../folder3","item.js",__dirname,"data.json"));



function gret(name){
    console.log("Hi 1",name);
    
}

function greet(greetFunction){
    const name = "Vishwas";
    greetFunction(name)
}

greet(gret)



// callback are two type -- "async" " sync"


class pizzShop {
    constructor(){
        this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
    }

    diplay(){
        console.log(`cureent o ${this.orderNumber}`);
        
    }
}

module.exports = pizzShop;