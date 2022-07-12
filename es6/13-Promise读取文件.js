//1.引入fs模块
const fs = require('fs');

//2.调用方法读取文件
// fs.readFile('./resources/为学.md',(err, data)=>{
//     //如果失败，则抛出错误
//     if(err) throw err;
//     //如果没有出错，则输出内容
//     console.log(data.toString());
// });

//3.使用Promise封装
console.log('准备创建promise对象');

const p = new Promise(function(resolve,reject){
    fs.readFile('./resources/为学.md',(err, data)=>{
        console.log('promise执行了');
        if(err) reject(err);
        resolve(data);
    });
});
console.log('promise处理回调');
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log('读取失败了,失败结果:\n',reason);
});