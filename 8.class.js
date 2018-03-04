// 类怎么调用 只能通过new调用
class Parent {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 静态方法，es7 静态属性
    static name(){
        return 100
    }
    // 这些方法都属于类的原型上 （实例上的方法）
    getName(){
        return this.name
    }
}
let p = new Parent('zfpx',9);
console.log(Parent.name());
// class的内部是通过Object.definePropterty来定义的，把公共方法定义在原型链上。把静态方法定义再类上

// function Fn(){

// }
// // ES5的 不能被babel转义
// Object.defineProperty(Fn,'getName',{
//     value:function(){
//         return 100
//     }
// });
// console.log(Fn.getName()); 



