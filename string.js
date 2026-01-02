// let string = "harshith kumar m       ";
// let str1 = "pavan";
// let str3 = string.trim();
// let str2 = string + str1;
// console.log();

// console.log(str2);
// let str = string.trim();
// console.log(str);

let str = prompt("enter your name");
str = str.replaceAll(/\s+/g,"").trim();
console.log("@"+str+str.length);
