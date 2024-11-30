const localLinks = document.querySelectorAll("a");
const nav = document.querySelector(".navigation");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");

document.querySelector(".navigation__button").addEventListener("click", () => {
  nav.classList.toggle("showNav");
});

hidePopup();
function hidePopup() {
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
}
///////////////////// SMOOTH SCROLLING
localLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = e.target.getAttribute("href");
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href === "##") {
      return;
    }
    if (href === "#popup") {
      e.preventDefault();
      return;
    }
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      nav.classList.remove("showNav");
      document.querySelector(`${href}`).scrollIntoView({
        behavior: "smooth",
      });
      hidePopup();
    }
  });
});
document.querySelectorAll(".btn-book").forEach((btn) =>
  btn.addEventListener("click", () => {
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    popupContent.style.opacity = 1;
    popupContent.style.transform = " translate(-50%, -50%) scale(1)";
  })
);
document.querySelector(".popup__close").addEventListener("click", hidePopup);

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    hidePopup();
  }
});
