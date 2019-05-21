##作用域：

    *词法作用域
    *动态作用域
    *函数作用域
    *全局作用域


###词法作用域:
    又叫做静态作用域，完全是由函数所声明的位置决定的。
    首先先检查自身，如果没有，就根据书写的代码查找上一层的代码

    例子：
    var a=1;
    function xy(){
        console.log(a);
    }
    xy()//1

    xy函数里面没有局部变量a,则查找到上一层a等于1，所以打印结果为1。

###动态作用域：
    顾名思义便是会动的，函数会动则是调用，即函数调用时才决定的作用域。

    例子：
    var a=1;
    function xy(){
        console.log(a);
    }
    function xy1(){
        var a=2;
        xy();
    }
    xy函数中没有变量a，此时则会在调用函数的作用域xy1()中查找a，所以打印出a=2;


##声明提前

###变量声明提前：
    即js引擎预编译时先声明变量并将其置顶。声明不包括对于变量的赋值和操作。

    例：
    var a=function(){
        console.log('A');
    }
    a();//A

    而实际代码如下：
    var a;
    function a(){
        console.log('A');
    }


###函数声明提前:
    即将函数的声明放在最前面，与变量声明提前类似，只不过变量声明提前是将变量
    声明放在最前面，而函数声明提前则是将函数声明放在最前面


###this的使用：
    通俗的来说,this是用来引用对象的，具体又是引用什么对象呢？？？以下

    例：
    window.color="red";
    var o={color:"blue"};

    function sayColor(){
        alert(this.color);
    }

    sayColor();//"red"

    o.sayColor=sayColor;
    o.sayColor();//"blue"


    根据上面例子，可以看出在调用sayColor()时，this引用的是全局对象window,即对this.color求值
    转换成了对window.color求值。在调用o.sayColor时，this引用的是对象o, 所以对this.color求值
    转换成了对o.color求值。


    那么至于上面的问题：
    ####说明，this引用的对象是不确定的，因此，this会在执行过程中引用不同的对象！




