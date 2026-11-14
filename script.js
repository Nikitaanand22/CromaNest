const colors = [
  "#e63946",
  "#1d3557",
  "#2a9d8f",
  "#ffb703",
  "#8338ec",
  "#ff006e",
  "#06d6a0",
  "#f77f00"
];

document.querySelectorAll(".change-color-btn").forEach((button) => {
  let colorIndex = 0;

  button.addEventListener("click", function () {
    const bottle = this.closest(".bottle-card").querySelector(".bottle");

    colorIndex = (colorIndex + 1) % colors.length;
    bottle.style.setProperty("--bottle-color", colors[colorIndex]);
  });
});