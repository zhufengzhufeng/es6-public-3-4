//let Promise = require('./Promise')
let p = new Promise(function(resolve,reject){
    // executor 只要newPromise 就会执行这个函数
    //resolve('有钱');
    setTimeout(function(){
        resolve('有钱');
    },1000);
});
p.then(function(data){
    console.log(data);
},function(err){
    console.log(err);
});
p.then(function(data){
    console.log(data);
},function(err){
    console.log(err);
});

// p就是promise的实例，默认情况下promise的状态是pending状态

// 成功态和失败态不能相互转化 一旦成功就不会失败 ，一旦失败就不能成功
// 每一个promise的实例上都有一个then方法，then方法中有两个参数一个成功一个失败

//1.同一个promise实例可以then多次，如果then的时候并没有成功或者失败式（就是等待态）需要将回调函数存起来，当你调用了resolve时执行成功的回调函数 