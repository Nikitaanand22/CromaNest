    const colors = [
      "#e63946", // red
      "#1d3557", // blue
      "#2a9d8f", // green
      "#ffb703", // yellow
      "#8338ec", // purple
      "#ff006e", // pink
      "#06d6a0", // mint
      "#f77f00"  // orange
    ];

    let colorIndex = 0;

    document.querySelectorAll(".change-color-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const bottle = this.closest(".bottle-card").querySelector(".bottle");

        colorIndex = (colorIndex + 1) % colors.length;
        bottle.style.setProperty("--bottle-color", colors[colorIndex]);
      });
    });