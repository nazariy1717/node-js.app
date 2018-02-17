
// var obj = require('./mod');
//
// function User(name){
//     this.name = name;
//     this.sayHello =()=>{
//         console.log(`hello`, this.name);
//     };
// }
//
//
// let John = new User(`John`);
//
// John.sayHello();
//
// console.log(obj.number);
// obj.func();

//
// console.log(obj.variable);
// obj.sayHello();



let db = require('./dbConnection');

let cn = new db();
cn.connect();













