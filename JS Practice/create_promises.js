const cart = ["Shoes", "pants","Kurta"];

// console.log(promise);

createOrder(cart)
.then(function (orderId){
    console.log(orderId);
    return orderId;
}).catch(function (err){
    console.log(err.message);
})
.then(function (orderId){
   return proceedToPayment(orderId);
}).then(function (paymentInfo){
    console.log(paymentInfo);
}).catch(function (err){
    console.log(err.message);
}).then(function(orderId){
    console.log("No matters what happens, I will definitely called")
});

// Producer
 
function createOrder(cart) {
    const pr = new Promise(function (resolve,reject){
        //create order
        // validate order
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for order
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });
    return pr;
};

function proceedToPayment(orderId){
    //
    return new Promise(function (resolve,reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return false;
}