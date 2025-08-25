// const { duration } = require("moment");

let navButton = document.querySelector("#nav-button");
let navbar = document.querySelector(".navbar");

navButton.onclick = () => {
  navbar.classList.toggle("active");

  // cek kondisi navbar
  if (navbar.classList.contains("active")) {
    navButton.textContent = "Close"; // ganti jadi "Close"
  } else {
    navButton.textContent = "Menu"; // balik lagi ke "Menu"
  }
};

const navigation = document.querySelector(".navbar");

if (navigation) {
  const navigationHeight = navigation.offsetHeight;

  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px",
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  let mouseX = 0,
    mouseY = 0;
  let posX = 0,
    posY = 0;

  // gerakin titik kecil langsung
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // gerakin lingkaran besar smooth
  function loop() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    follower.style.left = posX + "px";
    follower.style.top = posY + "px";
    requestAnimationFrame(loop);
  }
  loop();
});

// // Duplicate isi otomatis supaya loop seamless
// document.querySelectorAll(".marquee-content").forEach((el) => {
//   el.innerHTML += el.innerHTML;
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

// 1. Page fade in
// tl.from("body", { opacity: 0, duration: 0.8 })

//   // 2. Header & Logo
//   .from(".header", { y: -100, opacity: 0, duration: 1 }, "-=0.3")
//   .from(".logo", { opacity: 0, y: 40, duration: 1 }, "-=1")
//   .from(".navbar a", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.8")

//   // 3. Hero image & text
//   .from(
//     ".img-box img",
//     { y: 120, opacity: 0, scale: 1.2, duration: 1.2 },
//     "-=0.5",
//   )
//   .from(".img-text h1", { x: -80, opacity: 0, duration: 1 }, "-=0.8")

//   // 4. Hero description & button
//   .from(".home-description p", { y: 40, opacity: 0, duration: 1 }, "-=0.6")
//   .from(".black-btn", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.6")

//   // 5. Role list stagger
//   .from(
//     ".role li",
//     { x: 60, opacity: 0, stagger: 0.2, duration: 0.8 },
//     "-=0.5",
//   );

// // Floating effect for image
// gsap.to(".img-box img", {
//   y: 20,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
//   duration: 3,
// });

// // Background stars parallax effect → ganti ke element beneran
// gsap.to(".star-bg", {
//   x: 50,
//   y: 50,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
//   duration: 20,
// });

// const logo = document.querySelector(".logo");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         if (entry.target.classList.contains("light-section")) {
//           logo.style.color = "black";
//         } else {
//           logo.style.color = "white";
//         }
//       }
//     });
//   },
//   { threshold: 0.5 },
// );

// document.querySelectorAll("section").forEach((section) => {
//   observer.observe(section);
// });
