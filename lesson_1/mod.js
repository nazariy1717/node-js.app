console.log(`mod hello`);

let  x = 10;

// function test(){
//     console.log(`number`,x);
// }
//
// exports.number = x;
// exports.func = test;




function hello(){
    console.log(`hello`);
}


module.exports = {
    variable: x,
    sayHello: hello
};