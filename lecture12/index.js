document.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");
  let btn = document.querySelector(".btn");
  let stopBtn = document.querySelector(".stop");
  let id;
  let colors = [
    "red",
    "green",
    "black",
    "blue",
    "yellow",
    "orange",
    "pink",
    "purple",
    "brown",
    "aqua",
  ];

  function generateRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    let randomColor = colors[index];
    box.style.backgroundColor = randomColor;
  }

  btn.addEventListener("click", function () {
    if (id) clearInterval(id);
    id = setInterval(() => {
      generateRandomColor();
    }, 500);
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(id);
    box.style.backgroundColor = "white";
  });
});
