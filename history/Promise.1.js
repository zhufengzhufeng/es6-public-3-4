function Promise(executor){
    // 先要弄一个变量表示当前promise的状态
    let self = this;
    self.status = 'pending';
    self.value = undefined; // 存放为什么成功 
    self.reason = undefined; // 存放失败的原因
    self.onResovledCallbacks = [];// 存成功的回调函数
    self.onRejectedCallbacks = []; // 存放失败的回调
    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'resolved'; //已经成功了
            self.value = value;
            self.onResovledCallbacks.forEach(fn=>fn());
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected';        
            self.reason = reason;
            self.onRejectedCallbacks.forEach(fn=>fn());
        }
    }
    executor(resolve,reject);
}
// onFulfiled代表成功的回调
// onRejected代表的是失败的回调
Promise.prototype.then = function(onFulfiled,onRejected){
    let self = this;
    if(self.status === 'resolved'){
        onFulfiled(self.value);
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
    }
    if(self.status === 'pending'){ // 等待态
        self.onResovledCallbacks.push(function(){
            onFulfiled(self.value);
        });
        self.onRejectedCallbacks.push(function(){
            onRejected(self.reason);
        })
    }
}
module.exports = Promise;