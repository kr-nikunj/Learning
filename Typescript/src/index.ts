// let age: number=20;
// if (age<50)
//     age+=10;

// console.log(age);



// Array ---------------------------------------------------

// let num : number[] = [];
// num[0] = 1;
// num[1] = 2;
// // num[2] = '3';

// num.forEach(n => n.toString)

// let a = [1,2,'55',4,5]
// console.log(a[1]);



// tuples ------------------------------------------------

// let user:[number,string] = [1,"Nikunj"];
// // user.push(2,"John");

// console.log(user);



// Enum --------------------------------

// const small = 1;
// const medium = 2;
// const large = 3;

// // PascalCase
// const enum Size { Small = 1, Medium, Large}
// let mySize: Size = Size.Medium;

// console.log(mySize);



// Functions --------------------------------

// function calculateTax( income:number, taxYear:number): number{
//     if(taxYear <2022)
//         return income * 1.2;
//     return income *1.3;
// }

// calculateTax(10_000,2021)




// Object --------------------------------------------------------

// let employee: {
//     readonly id : number,
//     name : string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "Nikunj",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }




// type alias ------------------------------------------------

// type Employee = {
//     readonly id : number,
//     name : string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: "Nikunj",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }




// Union type ------------------------------------------------

// function kgToLbs(weight: number | string): number {
//     // Narrowing 
//     if(typeof weight === 'number'){
//         return weight * 2.2;
//     }else {
//         return parseInt(weight) * 2.2;
//     }
// }

// console.log(kgToLbs(100));
// console.log(kgToLbs('10kg'));



// Intersection type ------------------------------------------------

// type Draggable = {
//     drag:() => void;
// }

// type Resizable = {
//     resize:() => void;
// }

// type UIWidget = Draggable & Resizable ;

// let textBox: UIWidget = {
//     drag:() => {},
//     resize:() => {}
// }




// Literal type ------------------------------------------------

// // Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch'; 




// Nullable type ------------------------------------------------

// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase);    
//     else
//         console.log("Hello");
// }

// greet("Nikunj");
// greet(null);
// greet(undefined);



// Optional Chaining type ------------------------------------------------

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear()); 
