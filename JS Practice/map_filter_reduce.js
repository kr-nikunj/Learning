// Map------------------------

/*
const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}
const output = arr.map(double);

console.log(output);

const output3 = arr.map((x) => x * 3);

console.log(output3);

function binary(x) {
  return x.toString(2);
}

const output2 = arr.map(binary);
console.log(output2);
*/


// Filter--------------------------------
/*
const arr = [1, 2, 3, 4, 5];

function even(x) {
  return x % 2 === 0;
}

const output = arr.filter(even);

console.log(output);

const output2 = arr.filter((x) => x>3);
console.log(output2);
*/


// Reduce--------------------------------
/*
const arr = [1,2,3,4,5];

function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sum(arr));

const output = arr.reduce(function(acc,curr){
    return acc + curr;
},0);
console.log(output);

function max(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(max(arr));

const output2 = arr.reduce(function(acc,curr){
    let ans = curr;
    if(curr>acc) ans = curr;
    return ans;
},0)
console.log(output2);
*/



// Realworld Example----------------------------------------------------------------

const users = [
    {firsname: "firstname", lastname: "lastname", age:21},
    {firsname: "firstname2", lastname: "lastname2", age:22},
    {firsname: "firstname3", lastname: "lastname3", age:23},
    {firsname: "firstname4", lastname: "lastname4", age:21}
];

// List of full name -----------------------------------------------
const output = users.map((x) => x.firsname +" " + x.lastname);
console.log(output);

// age of users in array ------------------------------------------------
const output2 = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output2);

// first name of all users which age is less than 22 ---------------------------------
const output3 = users.filter((x)=> x.age<22).map((x) => x.firsname);

console.log(output3);