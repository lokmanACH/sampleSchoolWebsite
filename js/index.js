function checkScroll() {
  const scrollAnimationElements =
    document.querySelectorAll(".scroll-animation");

  scrollAnimationElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
