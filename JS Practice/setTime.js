/*
function x(){
    var i = 1;
    setTimeout(function() {
        console.log(i);
    },3000);

    // console.log("Knackroot");
}
x();
*/

/*
function y(){
    for(let i=1;i<=5;i++) {
        setTimeout(function() {
            console.log(i);
        },i*1000);
    }
}
y();
*/

/*
function z() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
z();
*/

/*
function counter() {
    var count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
*/

/*
function counter() {
    var count = 0;
    this.increment= function (){
        count++;
        console.log(count);
    }

    this.decrement = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new counter();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();

*/


console.log("Start");
setTimeout(function cb(){
    console.log("callback");
},5000);

console.log("End");

//million 

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While experies");

