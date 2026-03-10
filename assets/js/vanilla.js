// === Vanilla Tilt Init ===
document.addEventListener("DOMContentLoaded", () => {
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".tilt-item"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
    });
  }
});

VanillaTilt.init(document.querySelector(".tilt-wrapper"), {
  max: 25,
  speed: 250,
  scale: 1.06,
  perspective: 600,
  glare: false,
});
