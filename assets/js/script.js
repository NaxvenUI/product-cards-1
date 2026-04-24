const track = document.getElementById("track");
const dotEls = document.querySelectorAll(".dot");
let current = 0;
const total = 3;

// ===== Navigate to slide =====
function goTo(index) {
  current = ((index % total) + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotEls.forEach((d, i) => d.classList.toggle("active", i === current));
}

document
  .getElementById("prevBtn")
  .addEventListener("click", () => goTo(current - 1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => goTo(current + 1));

// ===== Swipe / Touch support =====
let touchStartX = 0;

track.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);

track.addEventListener(
  "touchend",
  (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) goTo(diff > 0 ? current + 1 : current - 1);
  },
  { passive: true },
);

// ===== Size selection =====
function selectSize(btn) {
  btn
    .closest(".sizes-wrap")
    .querySelectorAll(".size-btn:not(.unavailable)")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
}

// ===== Favorite toggle =====
function toggleFav(btn) {
  const on = btn.classList.toggle("active");
  btn.querySelector("i").className = on ? "ri-heart-fill" : "ri-heart-line";
}

// ===== Dot keyboard nav =====
dotEls.forEach((dot, i) => {
  dot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goTo(i);
    }
  });
});
