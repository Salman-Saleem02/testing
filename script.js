const allHandler = Array.from(document.querySelectorAll(".handler"));
const h2 = Array.from(document.querySelectorAll("h2"));
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (allHandler.includes(e.target)) {
    allHandler.forEach((e) => {
      e.classList.remove("active");
    });
    h2.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    e?.target?.childNodes[1].classList.add("active");
  }
});
