'user strict'

/*
var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}
*/
console.log('I\'m \"OK\"!');
//多行
console.log(`多行
支付穿
测试`);
//模板字符串
var name = '小明';
var age = 20;
var msg = `你好,${name},你今年${age}岁了！`;
console.log(msg);

// var s = '蔡冲';
// var s1 = 'hello world';
// console.log(s.length);
// console.log(s1.length);
// console.log(s[1]);
// console.log(s[3]);
// console.log(s1.toUpperCase());
// console.log(s1.substring(2));
// console.log(s1.substring(0,7));

// var arr = ['a','b','c'];
// var acopy = arr.slice();
// if (acopy === arr){
//     console.log('True');
// } else {
//     console.log('False');
//     console.log(arr);
//     console.log(acopy.reverse());
// }

var x = 1;
var i;
for (i = 1; i < 11; i++) {
    x = x*i;
}
console.log(x);