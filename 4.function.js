// 函数可以赋值默认值 一半情况下 和对象的解构一起用
function ajax({url=new Error('url不能为空'),method="get"}){
   console.log(url)
}
ajax({url:'/test',method:'get'});


// ... 将函数剩下的参数 变成数组，只能放到参数最后面
function sum(currency,...args){
    return currency+eval(args.join('+'));
}
console.log(sum('￥',1,2,3,4,5,6));

// 箭头函数
function a(){
    return {}
}
let a = ()=>({})
console.log(a());

function fn(a){
    return function(b){
        return a+b
    }
}
let fn = a=>b=>a+b;
fn(1)(2);

// 箭头函数 特点 没有function的关键字 没有this指向 没有arguments
// 谁调用的this就是谁 箭头函数中没有this 就会向上找，找到后返回
var name = 2;
let obj = {
    name:1,
    fn:function(){ // obj =  this
        setTimeout(()=>{ // this
            console.log(this.name)
        })
    }
}
let fn = obj.fn;
fn();

// 对象不是作用域 ,作用域之有函数 和{} 全局
let name = 1;
let obj = {
    name:2,
    fn:()=>{ // this
        console.log(this)
        console.log(this.name)
    }
}
obj.fn();

