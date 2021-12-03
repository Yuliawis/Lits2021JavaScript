

function factorial(n) {
    if (n <= 1)
    return n;
    return n * factorial(n-1);
}
console.log("Task 1");
console.log(factorial(64));


function task2() {
    console.log("Task 2");
    let n = 1000;
    let str = "";
    while (n < 10000){
        str += n.toString() + " ";
        n += 3;
    }
    console.log(str);
}
task2();

function task3() {
    console.log("Task 3");
    let n = 1;
    let str = "";
    for (let i = 0; i < 55; i++){
        str += n.toString() + " ";
        n += 2;
    }
    console.log(str);
}
task3();


function task4() {
    console.log("Task 4");
    let n = 90;
    let str = "";
    while (n > 0){
        str += n.toString() + " ";
        n -= 5;
    }
    console.log(str);
}
task4();

function task5() {
    console.log("Task 5");
    let n = 2;
    let str = "";
    for (let i = 0; i < 20; i++){
        str += n.toString() + " ";
        n *= 2;
    }
    console.log(str);
}
task5();



function task6() {
    console.log("Task 6");
    let n = 2;
    let str = "";
    while (2*n-1 < 10000){
        str += (2*n-1).toString() + " ";
        n++;
    }
    console.log(str);
}
task6();

function task7() {
    console.log("Task 7");
    let n = -160;
    let str = "";
    while (2*n+200 < 100){
        let result = 2*n+200;
        if (Math.abs(result) > 9 && Math.abs(result) < 100) {
            str += result.toString() + " ";
        }
        n++;
    }
    console.log(str);
}
task7();

function task8(a,b) {
    if (b == 0) {
       return 1;
   } 

   let result = 1;
   for (let i = 0; i < Math.abs(b); i++) {
       result *= a;
   }

   if (b < 0) {
       result = 1.0 / result;
   }

   return result;
}
console.log("Task 8");

let aStr = prompt("Enter a: ", "0");
let bStr = prompt("Enter b: ", "0");

console.log(task8(parseInt(aStr), parseInt(bStr)));