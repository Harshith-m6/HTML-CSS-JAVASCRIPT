let str = "HellOOO";
let strl =str.toLowerCase();
let voCount =0;
for(let i of strl)
{
    if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u')
    {
        voCount++;
    }
}
console.log(`Number of vowels in the String ${str} is ${voCount}`);

