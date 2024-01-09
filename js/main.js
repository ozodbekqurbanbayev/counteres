const elDarkimg = document.querySelector(".dark-img");
elDarkimg.addEventListener("click" , function () {
  document.body.classList.add("dark-mode");
});

const elDarktext = document.querySelector(".dark-text");
elDarktext.addEventListener("click" , function () {
  document.body.classList.remove("dark-mode");
});