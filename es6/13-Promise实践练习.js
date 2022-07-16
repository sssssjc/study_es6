//读取多个文件

//引入fs模块
const fs = require('fs');

//回调地狱问题：变量名容易重名，而且重名的话不容易被发现，调式问题很不方便
// fs.readFile('./resources/为学.md',(err,data1)=>{
//     fs.readFile('./resources/插秧诗.md',(err,data2)=>{
//         fs.readFile('./resources/观书有感.md',(err,data3)=>{
//             let result = data1+'\n'+data2+'\n'+data3;
//             console.log(result);
//         });
//     });
// });

//使用Promise实现
const p = new Promise((resolve,reject)=>{
    fs.readFile('./resources/为学.md',(err,data)=>{
        resolve(data);
    });
});

p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/插秧诗.md',(err,data)=>{
            resolve([value,data]);
        });
    });
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/观书有感.md',(err,data)=>{
            // value.push(data);
            // resolve(value);
            resolve([...value,data]);
        });
    });
}).then(value=>{
    console.log(value.join('\n'));
});

