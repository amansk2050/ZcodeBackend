
/*=============== utility and product carousal ===============*/

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 900px)')
// Check if the media query is true
if (mediaQuery.matches) {
  const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    perSwipe: '|',
    }).mount();
}
else {
  const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 2,
    perSwipe: '|',
    }).mount();
}



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img, .contact__box`, { origin: "left" });
sr.reveal(`.about__data, .contact__form`, { origin: "right" });
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {
  interval: 100,
});






/*=============== Language Script===============*/
$("#germany").click(function () {
  $("#germany").addClass("active");
  $("#france, #unitedKingdom").removeClass("active");
  $("#lang2, #lang3").toggle("slow", function () {});
  $(".select-lang").attr("style", "height:30px");
});
$("#france").click(function () {
  $("#france").addClass("active");
  $("#germany, #unitedKingdom").removeClass("active");
  $("#lang1, #lang3").toggle("slow", function () {});
  $(".select-lang").attr("style", "height:30px");
});
$("#unitedKingdom").click(function () {
  $("#unitedKingdom").addClass("active");
  $("#germany, #france").removeClass("active");
  $("#lang1, #lang2").toggle("slow", function () {});
  $(".select-lang").attr("style", "height:30px");
});

/*=============== VANILLA TILT===============*/
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
  reverse: true,
  max: 15,
  speed: 400,
  scale: 1.12,
  glare: true,
  reset: true,
  perspective: 500,
  transition: true,
  "max-glare": 0.75,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});


/*=============== Whitelist copy button ===============*/
function changeText() {
  let referralText=document.getElementById("myText");
  console.log(referralText.value);

  referralText.value=`this is the referrral link`

  document.getElementById("whitelist__button").innerText =`Copy Link`;


  var elem = document.getElementById('fixed__footer');
  elem.parentNode.removeChild(elem);

  var elem2 = document.getElementById('entrYouremail');
  elem2.parentNode.removeChild(elem2);
}
