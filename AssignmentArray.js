let price = [250 , 645 , 300 , 900 , 50];
let offer =[];

let ind = 0;
for(let i of price)
{
    console.log(`item at the index ${ind} is ${i}`);
    ind++;
}

for(let i =0 ; i<price.length ; i++)
{
    offer[i]=price[i]-price[i]*10/100;
}

for(let i of offer)
{
    console.log(`price after 10% offer is ${i}`);
}