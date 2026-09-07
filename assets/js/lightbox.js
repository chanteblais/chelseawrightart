// Minimal lightbox for the work gallery.
// Cards opt in with class "work-card" and data-images="a.jpg|b.jpg",
// data-title, data-meta. No dependencies.
(function () {
  var lb = document.getElementById("lightbox");
  if (!lb) return;

  var imgEl = lb.querySelector("img");
  var titleEl = lb.querySelector(".lb-title");
  var metaEl = lb.querySelector(".lb-meta");
  var images = [];
  var index = 0;

  function render() {
    imgEl.src = images[index];
    lb.querySelector(".lb-prev").hidden = images.length < 2;
    lb.querySelector(".lb-next").hidden = images.length < 2;
  }

  function open(card) {
    images = card.getAttribute("data-images").split("|");
    index = 0;
    titleEl.textContent = card.getAttribute("data-title") || "";
    metaEl.textContent = card.getAttribute("data-meta") || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    render();
  }

  function close() {
    lb.classList.remove("open");
    imgEl.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".work-card[data-images]").forEach(function (card) {
    card.addEventListener("click", function () { open(card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); }
    });
  });

  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function (e) {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    render();
  });
  lb.querySelector(".lb-next").addEventListener("click", function (e) {
    e.stopPropagation();
    index = (index + 1) % images.length;
    render();
  });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") { index = (index - 1 + images.length) % images.length; render(); }
    if (e.key === "ArrowRight") { index = (index + 1) % images.length; render(); }
  });
})();
