
        const cane = document.getElementById("cane");

    const buttons = document.querySelectorAll(".color-btn");

    buttons.forEach(button => {
      button.addEventListener("click", () => {

        const newImage = button.dataset.image;

        bottle.src = newImage;

      });
    });