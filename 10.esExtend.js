class Parent{
    constructor(name){
        this.name = name;
    }
    static fn(){
        return 'zfpx'
    }
}
class Child extends Parent{ // 会继承静态属性和对应的方法
    constructor(name){
        super(name); // 只要有父类 子类有constructor 就要写super
        // Parent.call(this); 继承私有方法
    }
}
// 子类可以继承父类的静态方法
let child = new Child('1');
console.log(child.name);
