let res = document.getElementById("mydiv");

console.dir(res);

let h2 = document.getElementsByClassName("h2");
console.log(h2);
console.log(h2[0]);

let res2 = document.getElementsByTagName("p");
console.log(res2);

let out = document.querySelector("#mydiv"); 
console.log(out);
let out2 = document.querySelectorAll("p");
console.log(out2);


console.log(res.innerHTML); 
console.log(res.innerText);
res.innerText = "hello world";
console.log(res.getAttribute("id"));

let myH = document.querySelector(".h2");
console.log(myH.classList);
myH.classList.add("hi");
myH.classList.remove("h2");
let btn = document.querySelector(".btn");
let form = document.querySelector(".signup");
btn.addEventListener("click", () => {
  form.classList.toggle("hide");
});
