// var有很多问题
//1.同一个变量用var可以声明多次
//2.var有预解释 变量提升
//3.var的作用域问题 全局作用域  函数作用域
//4.声明的变量可以更改 没有常量的概念


//1) 不能重复声明
var name = 'zfpx';
var name = 'jw'

let name = 'zfpx';
let name = 'jw'

//2.变量提升
console.log(a);
let a = 1;

//3.作用域 会污染全局变量(全局作用域  函数作用域)
let a = 1;
console.log(window.a)
// 当一个变量再一个作用域下声明过 这个变量就会绑定再这个作用于下
let a = 1;
if (true) {
    console.log(a);
    let a = 1;
}

// const来声明 不能更改的量
const PI = 3.14;
PI = 3.15
const SCHOOL = { name: 'zf' }
SCHOOL.name = 'zfpx';
console.log(SCHOOL);


for(let i = 0;i<3;i++){
        setTimeout(function(){
            console.log(i)
        })
}
