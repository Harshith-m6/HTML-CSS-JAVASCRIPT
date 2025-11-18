let msg1 = "warning! your code contains error"
let msg2 =" your code processed successfully"

function systemMessage(message)
{
    let lcm = message.toLowerCase();
    if((lcm.includes("warning"))||(lcm.includes("insufficient"))||(lcm.includes("error")))
    {
        console.log("cant process your request due to insufficient resource");
    }else if((lcm.includes("success"))||(lcm.includes("processed"))||(lcm.includes("accepted")))
    {
        console.log("Message processed successfully");
        
    }
}