// setPrototypeOf
let obj = {name:'zfpx'};
let age = {age:9};
// 对象上没有 prototype
obj.__proto__ = age;
let obj = {name:'zfpx'};
let age = {age:9};
Object.setPrototypeOf(obj,age);
console.log(obj.age);
let name = 'zfpx'
let obj ={
    name,
    fn(){
        return 'hello'
    }
}
// obj1上想获取原型链上的方法
let obj1 = {
    name:'zf',
    __proto__:obj,
    fn(){
        return super.fn()+'world'
    }
}
console.log(obj1.fn())

// Object.assign =  {...name}