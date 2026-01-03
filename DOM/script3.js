let div = document.querySelector("#box");
console.log(div);
console.dir(div);

let h1 = document.getElementById("head1");

let p1 = document.getElementsByTagName("p");


let id = div.getAttribute("id");
console.log(id);

let head = h1.getAttribute("head1");

h1.setAttribute("head1", "h2");

let newBtn = document.createElement("button");
console.dir(newBtn);
newBtn.innerText = "click me";

p1[0].after(newBtn);

let heading = document.createElement("h1");
heading.innerText = "This is Dom class";

div.prepend(heading);

// div.remove();


