'use strict';

var _createClass = function () {
    //  Parent   
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
                // vue双向数据绑定
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    } 
    //  Parent.prototype   Parent
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            // Parent.prototype   [{key:getName,value:fn}]
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps) 
            // Parent , [{key:name,value:fn}]
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// 类怎么调用 只能通过new调用
var Parent = function () {
    function Parent(name, age) {
        // constructor 构造函数
        _classCallCheck(this, Parent);

        this.name = name;
        this.age = age;
    }
    // 静态方法，es7 静态属性
    // 把这些对应的方法 
    // Parent代表的是当前类 原型上方法的描述
    _createClass(Parent, [{
        key: 'getName',

        // 这些方法都属于类的原型上 （实例上的方法）
        value: function getName() {
            return this.name;
        }
    }], [{ // 放到类的私有属性上
        key: 'name',
        value: function name() {
            return 100;
        }
    },{ // 放到类的私有属性上
        key: 'name',
        value: function name() {
            return 100;
        }
    }]);

    return Parent;
}();

var p = new Parent('zfpx', 9);
console.log(Parent.name());