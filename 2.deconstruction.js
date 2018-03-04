// 解构： 等号左边和右边类似 
// 数组的解构
let arr = ['zfpx', 9];
let name = arr[0];
let age = arr[1]

let arr = ['zfpx', 9];
let [name, age] = arr;
console.log(name, age);


// 对象的解构
// 起别名用冒号 默认值用等号
let obj = { name: 'zfpx', age: 9 }
let { name: n, age, address = '回龙观' } = obj;
console.log(n, age, address)

// 复杂的解构 省略解构
let arr = [{ name: 'zfpx', age: '9' }, '回龙观', { name: 'jw' }];
let [, address, { name }] = arr;
console.log(address, name);