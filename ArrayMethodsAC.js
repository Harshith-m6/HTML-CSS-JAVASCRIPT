let foods = [];
foods.push("Meat");
foods.push("panner");
foods.push("Fruits");
foods.push("veggies");
foods.push("Anaj");
foods.pop();

for(let i of foods)
{
    console.log(i);
}

//tostring() is used get the elements in a string form
console.log( foods.toString());



 let snacks = ["pizza" , "Fruit juice" , "Coffee" ,"Bakery" ]
 let needs= foods.concat(snacks);
 foods.toString(needs);
console.log(needs.toString());

let eat =snacks.unshift("salad");
console.log(eat.toString());

console.log(eat);

let eated = snacks.shift();
console.log(eated);




