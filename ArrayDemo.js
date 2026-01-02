let myArray = [10,20,30,40];
console.log("Initial Array ",myArray);

myArray.push(33);
console.log(myArray);
myArray.pop();
console.log(myArray); // Array behaves as stack for pop()

myArray.shift(); // Array behaves as queue when shift() is used
console.log(myArray);

myArray.unshift(100);
console.log(myArray); //adds the element at the first index

const products = [
    {name:"projector", price:15000},
    {name:"Iphone", price:40000},
    {name:"MacBook", price:50000}
]

const product_in_my_budget= products.filter(p => p.price<30000)
console.log(product_in_my_budget);

const updated_price = products.map( p=> ({...p,price : p.price +200}))
console.log(updated_price);
let updated_cost = products.reduce((sum,p) => sum + p.price,0)
console.log("Total amount",updated_cost);

