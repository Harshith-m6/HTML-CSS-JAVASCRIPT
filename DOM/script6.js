let btn1 = document.getElementById("btn1");
let btn2 = document.querySelector("btn1");

btn1.onclick = () => {
      let i = 1 ;
    console.log(`buttom clicked ${i} th time`);
    i++;
}

let div1 = document.querySelector("#box");
div1.onmouseover = () => {
    console.log("ur on the div");
}

div1.addEventListener("mouseover", ()=> {console.log("event Listener on mouse-over");
})

btn1.addEventListener("click" , ()=> {console.log("Event Listener click");
})