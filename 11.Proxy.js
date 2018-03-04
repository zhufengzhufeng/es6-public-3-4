// Proxy  实现双向数据绑定


// 数据变化 应该让视图更新

// 实现双向绑定的方案：发布订阅模式  脏值检测 Object.defineProperty  Proxy

function update(){
    console.log('更新')
}
// 此方法用来更新视图的
function $set(obj,callback){ 
    // 只要给$data赋值 就会调用set方法
    let $data = new Proxy(obj,{
        set(target,key,value){ // 目标
            update();
            target[key] = value
        }
    });
    callback($data);
}
let obj = {name:'zfpx',age:{age:1}};
$set(obj.age,function($data){
    $data.age = 10;
});
