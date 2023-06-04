const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

/*menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});*/


/*nav menu*/
function myFunction(x) {
    x.classList.toggle("change");
  }


  /* slide show*/
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }