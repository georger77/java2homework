// // // // alert('Hello World!');
// // // // let sum =1+2+3+4/5;
// // // // sum+='hi';
// // // // alert(sum);
// // // let name=prompt('enter your name!');
// // // alert('your name is' + name);
// // // console.log('your name is' + name);
// // // document.write('your name is' + name);
// // let age=Number(prompt('Enter your age'));
// // age+=1;
// // document.write('Next year your age is' 
// // + age );
// // const age=Number(prompt('Enter yor age'));
// // function print(a){
// //     document.write(a+'<br>');
// // }
// // function testYourAge(age){
// // if(age<18) {const left=18-age;
// //     return 'It is ' + left}
// // else{return 'more then  18' }}
// // print(testYourAge(age)) ;
// function print(a) {
//     document.write(a + '<br>');
// }

// function discriminant(a, b, c) {
//     return b * b - 4 * a * c;
// }

// function equationDecision(a, b, c) {
//     const d = discriminant(a, b, c)
//     if (d < 0) { return 'we dont have any decision' }
//     else {
//         if (d === 0) {
//             return 'we have only one decision   x1=x2= ' + -b / (2 * a)
//         }
//         else {
//             const x1 = (-b + Math.sqrt(discriminant(a, b, c))) / (2 * a);
//             const x2 = (-b - Math.sqrt(discriminant(a, b, c))) / (2 * a);
//             return 'x1=  ' + x1 + 'x2=  ' + x2
//         }
//     }
// }
// alert('A typical equation is  ' + 'a*x*x+b*x+c=0' + '     ' + 'Enter a,b,c');
// const a = Number(prompt('Enter a'));
// const b = Number(prompt('Enter b'));
// const c = Number(prompt('Enter c'));
// print(equationDecision(a, b, c));






// const age=Number(prompt('Your age'));
// switch (age) {
//     case 1:
//         alert('Too young');
//         break;
//     case 35:
//         alert('Just right');
//         break;
//         case 100:
//         alert('Too old');
//         break;
//     default:
//         alert('Uknown');
// }


// const message = (age>=18) ? 'Adult':'Child';
// alert(message);


// const age=Number(prompt('Your age'));
// let message;
// if(age>=18){
//     message='Adult';
// }else {
//     message='Child';
// }
// alert(message);


// for(let i=1;i<100;i++){
//     document.write(i + '<br>');
// }
// for(let i=100;i>=0;i--){
//     document.write(i + '<br>');
// }




// let age = 0 ;
// // while(age<18){alert("Too small");
// // age=Number(prompt('your age'));
//     // }
//     for(;age<18;){
//         alert('Too small');
//         age=Number(prompt('your age'));}

// let age;
// do {
//     age=Number(prompt('Your age'));
//     if (age<18){alert('too small')}
//     }
//     while(age<18);


// //******************************************

// let n = Number(prompt('First variant.Enter your number'));
// function Fibonachi(n){
// let a = 0;
// let c;
// let b = 1;
// if (n === 1) {
//     return 0;
// }
// else {
//     if (n === 2) {
//         return 1;
//     }
//     else {
//         for (let i = 3; i < n + 1; i++) {
//             c = a + b;
//             a = b;
//             b = c;
//         }
//         return c;
//     }
// }}
// alert(n + 'nth number Fibonachi is ' + Fibonachi(n));
// //******************************************************
// let n1 = Number(prompt('Second variant.Enter your number'));
// function Fibonachi1(n1){
// let a1 = [];
// a1[1] = 0;
// a1[2] = 1;
// for (let i = 3; i < n1 + 1; i++) {
//     a1[i] = a1[i - 1] + a1[i - 2];
// }
// return a1[n1];}
// alert(n1 + 'nth number Fibonachi is ' + Fibonachi(n1));
// //*************************************************************
let n2 = Number(prompt('Third variant.Enter your number'));
function Fibonachi2(n2){

    return (n2<=1)? n2:Fibonachi2(n2-1)+Fibonachi2(n2-2);
}
alert(n2 + 'nth number Fibonachi is ' + Fibonachi2(n2-1));