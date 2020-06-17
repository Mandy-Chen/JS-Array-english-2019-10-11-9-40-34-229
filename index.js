// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);//false
console.log(b instanceof Array);//true


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < 5; i++) {
    a[i] *= 2;
}
console.log(a)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var case1 = "";
for (let i = 0; i < 4; i++) {
    case1 = case1 + colors[i] + " ";
}
console.log(case1)
// case 2 output: 'Red+Green+White+Black'
var case2 = "";
for (let i = 0; i < 4; i++) {
    if (i < 3) {
        case2 = case2 + colors[i] + "+";
    } else {
        case2 = case2 + colors[i];
    }
}
console.log(case2)
// case 3 output: 'Red,Green,White,Black'
var case3 = "";
for (let i = 0; i < 4; i++) {
    if (i < 3) {
        case3 = case3 + colors[i] + ",";
    } else {
        case3 = case3 + colors[i];
    }
}
console.log(case3)


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var temp = "";
for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        if (a[i] < a[j]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a)


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var max_n = 0;//最多的次数
var max_e = "";//出现次数最多的元素
for (let i = 0; i < a.length; i++) {
    let num=0;
    for (let j = 0; j < a.length; j++) {
        if (a[j]==a[i]) {
            num++;
            if(max_n<num){
                max_n=num
                max_e=a[j];
            }else{
                // console.log(a[i])
            }
            
        } 
    }
}
// console.log(max_n)
console.log(max_e)
