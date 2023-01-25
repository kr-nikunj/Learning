/*
const cart = ["Shoes", "pants","Kurta"];

createOrder(cart, function (orderId){
    ProceedToPayment(orderId);
});

const promise= createOrder(cart);

promise.then(function (orderId){
    ProceedToPayment(orderId);
})
*/

// A Promise is an object representing the eventual completion 
// of failiur of an asynchronous operation.

createOrder(cart, function (orderId){
    proceedToPayment(orderId, function (paymentInfo){
        showOrderSummary(paymentInfo, function (){
            updateBalance();
        });
    });
});

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo)=> showOrderSummary(paymentInfo))
.then((paymentInfo)=> updateBalance());