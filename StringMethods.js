let message = "Welcome to the world of JavaScript"
console.log(message.length);
console.log("Welcome ".toUpperCase());  //directly string methods can act on literal
console.log("THANKYOU".toLowerCase());


let text = "     Welcome to the JS discussion    ";
console.log("Hello"+text.trimStart());
console.log("Hello"+text+" come to learn go to serve");
console.log(text.trimEnd()+"Come to learn go to serve");



console.log(message.startsWith("W"));
console.log(message.startsWith("Welcome"));
console.log(message.endsWith("t"));
console.log(message.endsWith("Script"));
console.log(message.replace("JavaScript","ECMAScript"));
console.log(message.substring(2,7));
console.log(message.slice(2,7));
console.log(message.split(" "));


let name ="    muTHu ViSHWanathaN    ";
name = name.trimEnd()
name =name.trimStart()

name =name.toLowerCase()

name =name.replace('m','M')
name = name.replace('v','V');

console.log(name);






















