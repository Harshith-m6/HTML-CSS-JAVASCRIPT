let name = "    muTHu ViSHWanathaN    ";
console.log(name = name.trim());
function properCase(name)
{
    let words = name.toLowerCase().split(" ");
     let properCase = "";
    for(i = 1 ; i<=words.length ; i++)
    {

       
        if(words[i]!="")
        {
            let fChar = words[i].charAt(0).toUpperCase();
            let remain = words.slice(1);

            properCase +=fChar+remain+" "
        }
    }
    console.log(properCase);
    
}