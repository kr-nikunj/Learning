function x() {
    var x = 7;
    function y() {
        console.log(x);
    }
    x=100;
    y();
}   
var z = x();

console.log(z);