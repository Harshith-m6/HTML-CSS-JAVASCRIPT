let modebtn = document.getElementById("mode");
let bg = document.querySelector("body")
// bg.style.backgroundColor = "white";
let currmode = "light";

let event = ()=> { if(currmode === "light"){
      currmode="dark";
    //   bg.style.backgroundColor = "black";
      bg.classList.add("dark");
      bg.classList.remove("light");
}else {
        currmode="light";
        // bg.style.backgroundColor = "white";
          bg.classList.remove("dark");
         bg.classList.add("light");
       
    }
    console.log(`mode is ${currmode}`);
  
} 

modebtn.addEventListener("click" ,event );
