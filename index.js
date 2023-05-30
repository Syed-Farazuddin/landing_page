const menubar = document.getElementById("menu_icon");
const sidebar = document.getElementById("menu");
const close_sidebar = document.getElementById("close");
if (window.innerWidth === 425 || window.innerWidth > 425) {
  document.getElementById("main_img").src =
    "./assets/images/image-web-3-mobile.jpg";
  console.log("Mobile view activated");
}

menubar.addEventListener("click", () => {
  console.log("The click is used");
  sidebar.classList.add("menu");
  //   close_sidebar.style.color = "green";
});

document.getElementById("close").addEventListener("click", () => {
  console.log("Click on close button");
  sidebar.classList.remove("menu");
});
