//---------------------------task1
const sum = (c,t) => c + t;
console.log(sum (10,60));
//---------------------------task2
function min(a, b) {
    if (a < b) {
        console.log(`${a} меньше`);
    } else {
        console.log(`${b} меньше`);
    }
}
min(6, 2);
//---------------------------task3
const pow = (x,n) => x**n;
console.log(pow (2,5));
//---------------------------task4
function check(numb) {
    if (numb % 2 == 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
    return check;
}
let result = check(4081);
//---------------------------task5
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    if (r === undefined || g === undefined || b === undefined) {
        r = r || 0;
        g = g || 0;
        b = b || 0;
    }

    let hexR = componentToHex(r)
    let hexG = componentToHex(g)
    let hexB = componentToHex(b)
    return "#" + hexR + hexG + hexB;
}
console.log(rgbToHex(23,0,119));
console.log(rgbToHex(23,134));
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


