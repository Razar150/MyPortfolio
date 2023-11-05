window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 0);
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

if (menuBtn) {
  menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    if (navigation) {
      navigation.classList.toggle("active");
    }
  });
}

if (navigationItems) {
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      if (menuBtn) {
        menuBtn.classList.remove("active");
      }
      if (navigation) {
        navigation.classList.remove("active");
      }
    });
  });
}

const scrollBtn = document.querySelector(".scrollToTop-btn");

if (scrollBtn) {
  window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

document.getElementById("downloadButton").addEventListener("click", function() {
  // Create a link element
  var link = document.createElement("a");
  link.href = "C:\Users\raxit\Downloads\Rakshith_CV.pdf";
  link.download = "Rakshith_CV.pdf";

  // Trigger the download
  link.click();
});
