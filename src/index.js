let searchFormElement = document.querySelector("#search-form");

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = searchInput.value;
}

searchFormElement.addEventListener("submit", handleSearchSubmit);
