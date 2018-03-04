//Array.from();

// 将类数组转化数组 arguments dom对象 

let arr = Array.from({0:1,1:2,2:3,length:3})
console.log(arr);


// 用[...]需要当前类数组有“迭代器” 
// 什么是迭代器 迭代器需要返回一个对象对上有一个next方法，每次调用next方法会返回一个新对象对象上有两个属性，分别是value和done
let obj = {0:1,1:2,2:3,length:3,[Symbol.iterator]:function(){
    let index = 0; // 当前迭代到了第几个
    let self = this; // this指代的是当前对象
    return {
        next:function(){ // value代表的是当前的内容 done代表的是是否迭代完成
            return {value:self[index],done:index++ === self.length?true:false}
        }
    }
}}
 console.log([...obj]); // 迭代器就是有next方法,知道done为ture就结束


console.log(Array(3)); // 长度为3的
console.log(Array.of(3)) // 数组里有一项叫3的
console.log(Array(3).fill(3)); // 数组的填充

// copyWithin
console.log([1,2,3,4,5,6].copyWithin(0,2,4));

// reduce map filter some every (findIndex find) each
// prev代表的是数组的第一项
// next代表的是数组的第二项
// 当前迭代到了第几项
// current当前数组
// reduce会将执行后的结果作为下一次的prev
// 参数可以多加一项
Array.prototype.myreduce = function(callback){
    let prev = this[0];
    for(var i = 1; i<this.length;i++){
        prev = callback(prev,this[i],i,this); //函数的返回结果会作为下一次的prev
    }
    return prev
}
let result = [1,2,3,4,5].myreduce((prev,next,currentIndex,current)=>{
    if(currentIndex === current.length-1){
        return (prev+next)/current.length
    }
    return prev+next
})
console.log(result);

// reduce(收敛)map (映射) filter(过滤) some(找有没有满足的条件) every(和some相反)(findIndex find)(看能不能找到) each(循环)

Array.prototype.mymap = function(callback){
    let newArr = [];
    for(var i = 0;i<this.length;i++){
        newArr.push(callback(this[i],i))
    }
    return newArr;
}
let newArr = [1,2,3].mymap((item,index)=>{
    return `<li>${item}</li>`
});
console.log(newArr);

// find只会找一个 找到后停止 返回返回true表示找到了，会把当前项返回

// 声明式 
let item = [1,2,3,4,5,6,7,8].find(function(item,index){
    return item>6
});
console.log(item);

// some 找true 找到后返回true ，不继续向下找

let boolean = [1,2,3,4,4,4,4,4,4,4].every(function(item,index){
    console.log(1);
    return item === 4
})
console.log(boolean);

// filter过滤 返回一个过滤后的数组,方法中返回true表示留下

let newArr = [1,2,3,4,5,6].filter(function(item,index){
    return item<4
});
console.log(newArr);

// for value of arr 遍历数组 / for key in object 可以遍历对象和数组
let arr = [1,2,3]
for(let value of arr){
    console.log(a);
}

// includes是es7 不能写条件
console.log([1,2,3].includes(3));