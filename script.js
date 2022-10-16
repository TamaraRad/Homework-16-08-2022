//task1//
let a = 1;
if (a == 1) {
    console.log('Всем привет!')
}

//task2//
let b = -10;
if (b > 0) {
    console.log('Число a больше нуля')
}
else {
    console.log('Число b меньше нуля')
}

//task3//
let m = 7;
let n='';
if (m > 50) {
    console.log('большое')
}
else {
    console.log('маленькое')
}

//task4//
let g = 5; 
if (g ==1) {
    console.log ('g=1')
}
else if (g==2) {
    console.log('g=2')
}
else if(g==3) {
    console.log ('g=3')
}
else {
    console.log ('Неизвестное значение')
}



//task5//
let f = 45;
while (f <= 67) {
    console.log ('f');
    f++;
}


//task6//
let p = 45;
while (p<=670) {
    if(p%10 ==0) {
        console.log (p)
    }
    p++;
}


//task8//
function hello1(userName) {
    console.log(`Привет, ${userName}!`);
}
hello1('JavaScript');