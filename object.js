

// function A() {
//     this.name = "zhoujun"

//     this.do = function() {
//         console.log('----------')
//     }
// }

// let a = new A()

// a.do()
// console.log(a.name) 


// Number

// var  a = 0;

// var a  = new Number(0)

// a.toString()

// String 

// var str = 'abc'

// var str = new String('abc')




// Boolean

// var  b = true

// var b = new Boolean(true)
// null



// // Object

// var obj = {}

// var obj = new Object()

// // Function

// var fun = function() {}

// function fun() {

// }

// var fun = new Function() 

// // Array

// var arr = []

// var arr =  new Array()




// prototype


// function Fun() {

// }

// Fun.prototype.constructor

// Fun.prototype.do = function() {
//     console.log('1111111')
// }

// let f = new Fun()

// f.do()
//每个函数都有prototype属性。
//   并且prototype也是个对象。并且有 constructor是指向构造方法。

// Object.prototype

// let obj = {}

// obj.toString()


// String.prototype.substr = function(start, num) {
//     // 具体怎么实现
// }


// let a = 'abc'

// a.substr()

// a.toString()


// Number.prototype

// Array.prototype


// function A() {

// }


// function B(){
//     this.do = function(){
//         console.log('bbbbbb')
//     }
// }

// let obj = {
//     do :function(){
//             console.log('bbbbbb')
//     }
// }

// obj.do2 = function(){

// }

// A.prototype = obj

// A.prototype.constructor = A

// var a = new A()

// a.do()



// function Fun1() {
//     this.do = function() {
//         console.log('----',this.name)
//     }
// }


// function Func2() {
//     this.name = "xiayan"
// }
// var fun1 =new Fun1();

// Func2.prototype=fun1;


// let fun2 = new Func2()

// fun2.do()

// let obj = {
//     name: '111',
// }

// Object.prototype.age = 18


// // Object.prototype === obj.__proto__
// console.log(obj.age)


// Func2.prototype= === fun2.__proto__

/*
每个函数都有prototype属性。
  并且prototype也是个对象。并且有 constructor是指向构造方法。

  每个对象上都有 obj.__proto__ 属性， 并且它指向 此对象构造器上的prototype 
*/


// function A() {
//     this.name = "zhoujun"
// }

// function B() {

// }

// var a=new A();
// B.prototype = a;




// let b = new B()

// console.log(b.name)



// var name = "zhoujun"

// function a() {
//     console.log(name)
//     //name 被销毁了。
//     age =18
//     function b() {
//         console.log(age)
//     }
//     b()
// }

// a()


//ESMAScript 2015  6 

// function a() {

//     // for(var i =0; i<10; i++) {
//     //     setTimeout(function(){
//     //         console.log(i)
//     //     },1)
//     // }

// } 

// a()


//闭包

function a() {
    var num = 1;

    return function() {
        num
        console.log(num)
    }
}

let f = a()

// setInterval(function() {
//     f()
// },1000)


// 作用域的释放， 当函数执行完毕之后， 变量没有被其他作用域引用，就回被释放。


// VsCode 编辑器 

//Nodejs Javascript 

//Nodejs用法   进到你的代码目录 敲 node 文件名.js


//git的用法

/*
 git status 看当前未提交的文件。

 git add 将文件加入准备提交饿暂存区里。

 git commit -m '备注' 提交代码到本地代码仓库

 git push 推送到远程

 git pull 拉远程的代码

 git log 查看提交日志

 git remote show 看远程仓库的地址,用的少

*/