// ... 的作用 再我们的函数形参中 是剩余运算符，把剩下的结果转化成数组


// 再对象中或数组中 也可以用...
// 展开运算符  拓展运算符

let arr = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr,...arr2];
console.log(arr3);
// 对象
let name = {name:'zfpx'};
let age = {age:8};
let result = {...name,...age};
console.log(result);
let newObj = Object.assign({},name,age);
console.log(newObj)

// 深拷贝(两个对象完全没关系) 浅拷贝(对象里存的是地址空间，令一个对象改变了空间，也会导致当前对象更改)
// Object.assign 是浅拷贝 {...}也算浅拷贝
let school = {name:{name:'zfpx'}}
let newSchool = Object.assign({},school);
school.name.name = 'jw';
console.log(newSchool);

// let school = {name:0xffff}
// let newSchool = {name:0xffff}
// 0xffff.a = 100;

// 深拷贝  
let school = {
    name:{name:'zfpx'},
    age:9,
    address:'珠峰',
    arr:['1','2','3']
}
let newSchool = JSON.parse(JSON.stringify(school));
school.name.name = 'zf';
console.log(newSchool);
//递归拷贝
let school = {
    name:{name:'zfpx'},
    age:9,
    address:'珠峰',
    arr:[{name:1},'2','3']
}
function deepClone(parent,c){ // parent是要拷贝的对象
    let child = c||{};
    for(let key in parent){
        if(parent.hasOwnProperty(key)){
            let val = parent[key];
            if(typeof val === 'object'){
                child[key] = Object.prototype.toString.call(val)==='[object Array]'?[]:{}
                deepClone(parent[key],child[key]); // [1,2,3] // []
            }else{
               child[key] = parent[key]; // 处理普通属性的
            }
        }
    }
    return child;
}
console.log(deepClone(school));


function mapActions (){
    return {name:1,age:2}
}
let obj = {
    ...mapActions()
}

// 展开运算符
let arr = [1,2,3,4,5]
console.log(Math.min.apply(Math,arr));
console.log(Math.min(...arr));

function a(a,b){
    return a+b;
}
let fn = (n,b,c,...args)=>{
    console.log(a(...args))
}
fn(1,2,3,4,5);