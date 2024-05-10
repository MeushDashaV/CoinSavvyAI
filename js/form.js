
document.addEventListener("DOMContentLoaded", function () {

  let firstForm = document.querySelector(".form");
  let secondForm = document.querySelector(".let");
  let submitBtn = document.getElementById("btn");

  secondForm.style.display = "none";

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); 

    firstForm.style.display = "none";
    secondForm.style.display = "block";

    setTimeout(function () {
      firstForm.style.display = "block";
      secondForm.style.display = "none";
    }, 15000); 
  });
});