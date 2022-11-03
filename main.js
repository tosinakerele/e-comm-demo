var open = document.getElementById("open_btn");
var close = document.getElementById("close_btn");

fetch('./StoreData')

const handleToggle = () => {
  close.addEventListener("click", () => {
    close.classList.remove("active");
    close.classList.add("inactive");
    open.classList.add("active");
  });
  open.addEventListener("click", () => {
    close.classList.remove("inactive");
    open.classList.remove("active");
  });
};

console.log(StoreData[0].price);
