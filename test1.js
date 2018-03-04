'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    } return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    //Child.prototype = Object.create(Parent.prototype);
    // Child.prototype.construct !== Child
    subClass.prototype = Object.create(superClass && superClass.prototype, {
         constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); 
         subClass.__proto__ = superClass;
         // Child.__proto__ = Parent; // 让子类继承父类的属性
         if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Parent = function () {
    function Parent() {
        _classCallCheck(this, Parent);
    }

    _createClass(Parent, null, [{
        key: 'fn',
        value: function fn() {
            return 'zfpx';
        }
    }]);

    return Parent;
}();

var Child = function (_Parent) {
    // 让子类 继承父类
    _inherits(Child, _Parent); // 继承父类的公有方法

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this)); // 只要有父类 子类有constructor 就要写super
    }
    return Child;
}(Parent);