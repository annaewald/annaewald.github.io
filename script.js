const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

function adjustFooter() {
  const footer = document.querySelector("footer");
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  if (bodyHeight < windowHeight) {
    footer.style.position = "absolute";
    footer.style.bottom = "0";
    footer.style.width = "100%";
  } else {
    footer.style.position = "static";
  }
}

window.addEventListener("load", adjustFooter);
window.addEventListener("resize", adjustFooter);
