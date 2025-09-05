let navButton = document.querySelector("#nav-button");
let navbar = document.querySelector(".navbar");

navButton.onclick = () => {
  navbar.classList.toggle("active");

  // cek kondisi navbar
  if (navbar.classList.contains("active")) {
    navButton.textContent = "Close";
  } else {
    navButton.textContent = "Menu";
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
