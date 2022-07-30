///1. 引入fs模块
const fs = require('fs');

// let p = new Promise((resovle,reject)=>{
//     fs.readFile('./resources/为学.md',(err,data)=>{
//         if(err) reject(err);
//         console.log(data);
//         resovle(data);
//     });
// });
//读取《为学》
function readWeixue(){
    return new Promise((resovle,reject)=>{
        fs.readFile('./resources/为学.md',(err,data)=>{
            if(err) reject(err);
            // console.log(data);
            resovle(data);
        });
    });
}
function readChaYangShi(){
    return new Promise((resovle,reject)=>{
        fs.readFile('./resources/插秧诗.md',(err,data)=>{
            if(err) reject(err);
            // console.log(data);
            resovle(data);
        });
    });
}
function readGuanshu(){
    return new Promise((resovle,reject)=>{
        fs.readFile('./resources/观书有感.md',(err,data)=>{
            if(err) reject(err);
            // console.log(data);
            resovle(data);
        });
    });
}

async function main(){
    let weixue = await readWeixue();
    let chayang = await readChaYangShi();
    let guanshu = await readGuanshu();
    console.log(weixue.toString());
    console.log(chayang.toString());
    console.log(guanshu.toString());
}

main();