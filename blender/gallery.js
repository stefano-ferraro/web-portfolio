(function () {
  "use strict";

  /* ── Year ──────────────────────────────────────────────────────────────── */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ── Scroll reveal ─────────────────────────────────────────────────────── */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll("[data-reveal]");
    if (revealEls.length) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ── Lightbox (images only) ────────────────────────────────────────────── */
  const imageItems = Array.from(document.querySelectorAll(".gallery-item--image"));
  const lightbox   = document.getElementById("lightbox");
  const lbImg      = document.getElementById("lb-img");
  const lbClose    = document.getElementById("lb-close");
  const lbPrev     = document.getElementById("lb-prev");
  const lbNext     = document.getElementById("lb-next");
  const lbCounter  = document.getElementById("lb-counter");
  const lbImgWrap  = document.getElementById("lb-img-wrap");

  if (!lightbox || !lbImg || !lbClose || !imageItems.length) return;

  /* Build array of { src, alt } from image items */
  const images = imageItems.map(function (item) {
    const img = item.querySelector("img");
    return { src: img ? img.src : "", alt: img ? img.alt : "" };
  });

  let currentIndex = 0;
  let lastFocused  = null;

  function updateCounter() {
    if (lbCounter) lbCounter.textContent = (currentIndex + 1) + " / " + images.length;
  }

  function showImage(index) {
    lbImg.src = images[index].src;
    lbImg.alt = images[index].alt;
    updateCounter();
    /* Hide prev/next when there is only one image */
    if (lbPrev) lbPrev.style.display = images.length < 2 ? "none" : "";
    if (lbNext) lbNext.style.display = images.length < 2 ? "none" : "";
  }

  function openLightbox(index) {
    lastFocused  = document.activeElement;
    currentIndex = index;
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  /* Attach click / keyboard to each image item */
  imageItems.forEach(function (item, index) {
    item.addEventListener("click", function () { openLightbox(index); });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  /* Lightbox controls */
  lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", prevImage);
  if (lbNext) lbNext.addEventListener("click", nextImage);

  /* Click backdrop (not the image) to close */
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === lbImgWrap) closeLightbox();
  });

  /* Keyboard navigation */
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape")     { closeLightbox(); }
    if (e.key === "ArrowLeft")  { prevImage(); }
    if (e.key === "ArrowRight") { nextImage(); }
  });

  /* Touch swipe support */
  var touchStartX = 0;
  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) nextImage();
    else prevImage();
  }, { passive: true });
})();
