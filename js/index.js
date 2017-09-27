// //******************************************

let n = Number(prompt('First variant.Enter your number'));

function Fibonachi(n) {
    let a = 0;
    let c;
    let b = 1;
    if (n === 1) {
        return 0;
    }
    else {
        if (n === 2) {
            return 1;
        }
        else {
            for (let i = 3; i < n + 1; i++) {
                c = a + b;
                a = b;
                b = c;
            }
            return c;
        }
    }
}
alert(n + 'nth number Fibonachi is ' + Fibonachi(n));
// //******************************************************
let n1 = Number(prompt('Second variant.Enter your number'));

function Fibonachi1(n1) {
    let a1 = [];
    a1[1] = 0;
    a1[2] = 1;
    for (let i = 3; i < n1 + 1; i++) {
        a1[i] = a1[i - 1] + a1[i - 2];
    }
    return a1[n1];
}
alert(n1 + 'nth number Fibonachi is ' + Fibonachi(n1));
// //*************************************************************
let n2 = Number(prompt('Third variant.Enter your number'));

function Fibonachi2(n2) {

    return (n2 <= 1) ? n2 : Fibonachi2(n2 - 1) + Fibonachi2(n2 - 2);
}
alert(n2 + 'nth number Fibonachi is ' + Fibonachi2(n2 - 1));
