const cityForm = document.querySelector("form");

const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const citydetails = data.citydetails;
  const weather = data.weather;

  // Update details template

  details.innerHTML = `
     <h5 class="my-3">${citydetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  
  `;

  // Remove the d-none class if present

  if (card.classList.contains("d-none")) card.classList.remove("d-none");
};

const updatecity = async (city) => {
  const citydetails = await getcity(city);
  const weather = await getweather(citydetails.Key);

  return {
    citydetails: citydetails,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  // Prevent default
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updatecity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
