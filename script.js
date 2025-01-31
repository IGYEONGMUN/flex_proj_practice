//스크롤내림//스크롤값먼저알아내보자
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".gnb").classList.add("active");
    document.querySelector(".banner").classList.add("active");
  } else {
    document.querySelector(".gnb").classList.remove("active");
    document.querySelector(".banner").classList.remove("active");
  }
});
