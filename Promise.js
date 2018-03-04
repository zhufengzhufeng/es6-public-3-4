function Promise(executor) {
    // 先要弄一个变量表示当前promise的状态
    let self = this;
    self.status = 'pending';
    self.value = undefined; // 存放为什么成功 
    self.reason = undefined; // 存放失败的原因
    self.onResovledCallbacks = [];// 存成功的回调函数
    self.onRejectedCallbacks = []; // 存放失败的回调
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'; //已经成功了
            self.value = value;
            self.onResovledCallbacks.forEach(fn => fn());
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.reason = reason;
            self.onRejectedCallbacks.forEach(fn => fn());
        }
    }
    executor(resolve, reject);
}
// onFulfiled代表成功的回调
// onRejected代表的是失败的回调
function resolvePromise(promise2,x,resolve,reject){
    if(promise2 === x){
        return reject(new TypeError('循环引用'));
    }
    // 如果x是一个普通结果,那就直接成功，如果要是一个对象的话可能就是返回了一个promise
    if(x!==null &&(typeof x === 'object' || typeof x === 'function')){
        try{
            let then = x.then;  // 取then方法时 出现异常 走向失败态
            if(typeof then === 'function'){ // 是函数就是promise {then:{a:1}}
                then.call(x,function(y){
                    resolvePromise(promise2,y,resolve,reject);
                },function(err){ // 如果promise失败了 那就走下一个promie的失败态
                    reject(err);
                })
            }else{
                resolve(x); // 是对象 then不是函数
            }
        }catch(e){
            reject(e);
        }
    }else{
        resolve(x);
    }
}
Promise.prototype.then = function (onFulfiled, onRejected) {
    let self = this;
    let promise2;
    if (self.status === 'resolved') {
        promise2 = new Promise(function (resolve, reject) {
            try{
                let x = onFulfiled(self.value);
                // 我们要将返回值和promise2的关系 统一处理
                resolvePromise(promise2,x,resolve,reject)
            }catch(e){
                reject(e);
            }
        })
    }
    if (self.status === 'rejected') {
        promise2 = new Promise(function (resolve, reject) {
            try{
                let x = onRejected(self.reason);
                resolvePromise(promise2,x,resolve,reject)
            }catch(e){
                reject(e);
            }
        })
    }
    if (self.status === 'pending') { // 等待态
        promise2 = new Promise(function (resolve, reject) {
            self.onResovledCallbacks.push(function () {
                try{
                    let x = onFulfiled(self.value);
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e)
                }
            });
            self.onRejectedCallbacks.push(function () {
                try{
                    let x = onRejected(self.reason);
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e);
                }
            })
        })
    }
    return promise2;
}
module.exports = Promise;


// callback -> promise -> generator -> await / async
// Q库  blueBird Co库
// node基础