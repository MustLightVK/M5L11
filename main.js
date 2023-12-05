//---------------------------task1
const sum = (c,t) => c + t;
console.log(sum (10,60));
//---------------------------task2
function min(a, b) {
    if (a < b) {
        return a;
        
    } else {
        return b;
    }
}
let resultMin = min(6, 5);
console.log(resultMin);
//---------------------------task3
const pow = (x,n) => x**n;
console.log(pow (2,5));
//---------------------------task4
function check(numb) {
    if (numb % 2 === 0) {
        return 'четное';
    } else {
        return 'нечетное';
    }
}
let result = check(4081);
console.log(result); 
//---------------------------task5
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r = 0, g = 0, b = 0) {
    let hexR = componentToHex(r);
    let hexG = componentToHex(g);
    let hexB = componentToHex(b);
    return "#" + hexR + hexG + hexB;
}

console.log(rgbToHex(23, 0, 119)); 
console.log(rgbToHex(23, 134));
//---------------------------task6
function squareNumber(num) {
    return num**2;
}

function range (x) {
    if (x >= 18 && x <= 50) {
        console.log(squareNumber(x));
    } else {
        throw new Error ('Incorrect input. You need to set a number in the range from 18 to 50.')
    }
}

range(20);


