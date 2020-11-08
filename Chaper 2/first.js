function sayHello() {
    console.log("Hi,lcoderfit,I can,<\/script>");
}
sayHello();
let test = true;
if (test) {
    test = false;
    console.log("this is a test");
}

var message = "hello";
function testFunc() {
    var message = "hi";
}
testFunc();
console.log(message);

function test1() {
    message1 = "lcoderfit";
}
test1();
console.log(message1);

var a = 1,
    b = 2,
    c = 3;
console.log(a, b, c);


function test2() {
    // 会对声明的变量进行提升
    console.log(age);
    var age = 10;
}
// underfined错误
test2();

function test3() {
    // 重复定义不会报错
    var a = 1;
    var a = 2;
    var a = 3;
    console.log(a);
}
test3();

function test4() {
    var a = 1;
    let b = 2;
    console.log(a, b);
    if (a < b) {
        let d = 10;
        console.log(d);
    }
    // Uncaught ReferenceError: d is not defined
    // 运行报错，因为let声明的变量是块作用域
    // console.log(d);
}
test4();


function test5() {
    var a = 1;
    if (a > 0) {
        console.log(a);
    }
    let b = 2;
    if (b > 1) {
        console.log(b);
    }
}
test5();

// let声明的变量在作用域内不会被提升
function test6() {
    console.log(age);
    var age = 10;
    // Uncaught ReferenceError: Cannot access 'name' before initialization
    // console.log(name);
    // let name = "lcoderfit";
}
test6();


// var m = 10;
// console.log(window.m);
let n = 20;
// Uncaught ReferenceError: window is not defined
// console.log(n);

let aa = "lcoder";
let bb = 10;
if (typeof aa == "undefined") {
    let aa;
}
// let作用域是在块内的，下面的语句相当于建立了一个全局变量
aa = "lcoderfit";
console.log(aa);

try {
    console.log(bb);
} catch {
    let bb;
}
bb = 20;

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

for (let j = 0; j < 5; j++) {
    console.log(j);
}
// 会报错，因为let作用域在块内
// console.log(j)

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

for ( let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

// 常量不可修改，不可重复定义, 不能for (const i = 0; i < ....), 但可以用于某些for in, for of
const e = 1;
// Uncaught TypeError: Assignment to constant variable.
// e = 2;

console.log("Split: ******************************************")
for (const key in {a:1, b:2}) {
    console.log(key);
}

for (const value of [1,2,3,4,5]) {
    console.log(value);
}
console.log("Split: ******************************************")
