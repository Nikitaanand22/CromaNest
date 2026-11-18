    const object = document.getElementById("object");
    const buttons = document.querySelectorAll(".color-btn");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        object.style.backgroundColor = button.dataset.color;
      });
    });