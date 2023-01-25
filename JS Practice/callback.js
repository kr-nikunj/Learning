// what is callback function in javascript

/*
setTimeout(function() {
    console.log("Timeout");
},5000)


function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
});
*/

/*
function attachEventListener(){
let counter = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button clicked", ++counter);
});
}

attachEventListener();
*/





// Reacl world examples --------------------------------------------

const cart = ["Shoes", "pants","Kurta"];

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummery(function(){
            //....
        })
    })
})


