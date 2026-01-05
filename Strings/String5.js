let str = "Hello iam Harshith";
let strl =str.toLowerCase();
let voCount =0;
for(let i = 0 ; i<str.length ; i++)
{
    if(strl[i]===" "&&strl[i+1]!==" ")
    {
        voCount++;
    }
}
console.log(`Number of words in the String ${str} is ${voCount+1}`);