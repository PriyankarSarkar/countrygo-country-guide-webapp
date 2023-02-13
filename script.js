const search_div = document.querySelector(".search_div");
const input_box = document.querySelector(".input_box");
const search_button = document.querySelectorAll(".click");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

const main = () => {
  let country_name = input_box.value.trim();
  let url = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      result.children[0].innerHTML = `
                  
                  <img src="${
                    data[0].flags.svg
                  }" alt="img not found!" class="flag">
  
                  <h4 class="name">${data[0].name.common}</h4>
      
                  <div class="data">
                      <h5>Capital :</h5>
                      <span>${data[0].capital[0]}</span>
                  </div>
      
                  <div class="data">
                      <h5>Continent :</h5>
                      <span>${data[0].continents[0]}</span>
                  </div>
      
                  <div class="data">
                      <h5>Population :</h5>
                      <span>${data[0].population}</span>
                  </div>
                  
                  <div class="data">
                      <h5>Currency :</h5>
                      <span>${
                        data[0].currencies[Object.keys(data[0].currencies)].name
                      }</span>
                  </div>
                  
                  <div class="data">
                      <h5>Common Languages :</h5>
                      <span>${Object.values(data[0].languages).join(
                        ", "
                      )}</span>
                  </div>
                  
                  <div class="data">
                      <h5>Timezone :</h5>
                      <span>${data[0].timezones[0]}</span>
                  </div>
                  `;

      result.classList.remove("hide_result");
      error.innerHTML = ``;
    })

    .catch(() => {
      result.classList.add("hide_result");
      error.innerHTML = ``;

      error.innerHTML = `<img class="error_image" src="./no_result.gif" alt="">
                                     <li class="error_msg">Country Not Found!</li>`;
    });
};


window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") main();
});

search_button.forEach((item) => {
  item.addEventListener("click", () => main());
});
