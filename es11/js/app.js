// import * as m1 from './hello.js'

//获取元素
const btn = document.getElementById("btn");

btn.onclick = function(){
    //动态import 按需加载 懒加载
    import('./hello.js').then(module=>{
        module.hello();
    },reason=>{
        console.log(reason);
    });
}