let arr = [ {name : "Harshith" , place: "Banglore"}, 
    {name : "Pavan" , place: "Hyderabad"},
    {name : "Prajwal" , place: "Banglore"},
    {name : "Harshi" , place: "Hyderabad"}
]

let result ={};

for(let i =0 ; i<arr.length ; i++)
{
    let name = arr[i].name;
    let place = arr[i].place;
    if(result[place]===undefined)
    {
        result[place] = [name]
    }else{
        result[place].push(name);
    }
}
console.log(result);

