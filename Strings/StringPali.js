function pali(str)
{
    let n = str.length -1;
    let pali = true;
    for(let i =0 ; i<str.length/2 ; i++)
    {
        if(str[i]!==str[n])
        {
            pali = false;
            break;
        }
        n--;
    }
    console.log(pali?"Palindrome":"Not a palindrome");
    

}

pali("madmam");