let Promise = require('./Promise')
let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('有钱');
    },1000);
});
 // p2等待着p2
let p2 = p.then(function(data){
   return new Promise(function(resolve,reject){
       resolve(new Promise(function(resolve,reject){
        resolve(100)
       }))
   })
},function(err){
    console.log(err);
})
p2.then(function(data){
    console.log(data);
},function(err){
    console.log('err',err);
})
// JQuery 实现链式调用  不停的返回this，Promise实现链式调用返回的是一个新的promise
// 当执行then方法时 如果有错误会执行下一次then的失败回调
// 当第一个promise 无论成功还是失败 只要没有错误就会走p2的成功的回调，除非有失败才会走p2的失败