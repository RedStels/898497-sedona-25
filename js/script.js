document.querySelector(".search-form-button").addEventListener("click", function(event) {
  event.preventDefault();

  var modal = document.querySelector(".modal");

  if (modal.classList.contains("modal-show")) {
    modal.classList.remove("modal-show");
  } else {
    modal.classList.add("modal-show");
  }
});