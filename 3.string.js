// 模板字符串
let name = 'zfpx';
let age = 9;

//let str = "\""+name+"\""+'今年'+age+'岁了';
let str = `\`"${name}"\`今年${age}岁了`
console.log(str);


let name = 'zfpx';
let age = 9;
// 模板字符串可以换行
let str = `<ul>
    <li>${name}</li>
    <li>${age}</li>
</ul>`
console.log(str);

// 实现模板字符串(替换将替换的结果用eval执行)
let name = 'zfpx';
let age = 9;
let str = '<ul><li>${name}</li><li>${age}</li></ul>';
let newStr = str.replace(/\$\{([^}]+)\}/g,function(){
    return eval(arguments[1]);
});
console.log(newStr);


// 带标签的模板字符串
let name = 'zfpx';
let age = 9;
function tag(strings){
    let args = Array.prototype.slice.call(arguments,1);
    let str = ''
    for(var i = 0;i<args.length;i++){
        str+=(strings[i]+args[i].toString().toUpperCase());
    }
    str+=strings[strings.length - 1]
    return str;
}
let str = tag`${name}今年${age}${age}岁了`
console.log(str);

// 字符串的常见方法
let str = 'zfpxjwzpfx';
console.log(str.includes('jw'));

let url = 'https://www.baidu.com';
console.log(url.startsWith('https'));

let avatar = '1.png';
console.log(avatar.endsWith('.png'));

let date = new Date();
let hour = date.getHours().toString();
let m = date.getMinutes().toString()
let s = date.getSeconds().toString();

let result = `${hour.padEnd(2,0)}:${m.padStart(2,0)}:${s.padStart(2,0)}`
console.log(result)

