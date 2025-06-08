document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const loader = document.getElementById("form-loader");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    loader.style.display = "block";

    // form.innerHTML = "";

    const formData = new FormData(form);

    form.innerHTML = "";

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Данные отправлены успешно", data);
        loader.style.display = "none";
        form.innerHTML =
          "<p class='success-message'>Спасибо за регистрацию!</p>";
      })
      .catch((error) => {
        console.error("Ошибка при отправке", error);
        loader.style.display = "none";
        form.innerHTML =
          "<p class='error-message'>Ошибка. Попробуйте снова.</p>";
      });
  });

  const hoverArea = document.querySelector(".showing-area");
  const hoverImage = document.querySelector(".paper_content");

  if (hoverArea && hoverImage) {
    hoverArea.addEventListener("mouseenter", () => {
      document.querySelector(".paper_form").style.transform =
        "translateX(-500px)";
    });

    hoverArea.addEventListener("mouseleave", () => {
      document.querySelector(".paper_form").style.transform =
        "translateX(500px)";
    });
  }
});
