let arr = [1,2,3,4,5,6,7,8];
let even =[];
let odd = [];
let eveCount=0;
let oddCount =0;
for(let i of arr)
{
    if(i%2===0)
    {
        even.push(i);
        eveCount++;
    }else{
        odd.push(i);
        oddCount++;
    }
}
console.log(even);
console.log(odd);
console.log(`even count is ${even.length} , ${eveCount}`);
console.log(`odd count is ${odd.length} , ${oddCount}`);


