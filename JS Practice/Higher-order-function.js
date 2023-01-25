const radius = [3,1,2,4];

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
};

const diameter = function(radius) {
    return radius * 2;
}

const calculate = function (radius,logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));

/*

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

*/