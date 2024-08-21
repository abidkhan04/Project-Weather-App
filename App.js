const cityForm = document.querySelector("form");

const card = document.querySelector(".card");
const details = document.querySelector(".details");

const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const citydetails = data.citydetails;
  const weather = data.weather;

  // By Destructure Properties
  // const { citydetails, weather } = data;

  // Update details template

  details.innerHTML = `
     <h5 class="my-3">${citydetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  
  `;

  // Update the day/night & icon images

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  console.log(data);
  icon.setAttribute("src", iconSrc);

  // By ternary operator method

  let timeSrc = weather.IsDayTime ? "img/icons/day.svg" : "img/icons/night.svg";

  // let timeSrc = null;
  // if (weather.IsDayTime) {
  //   timeSrc = "icons/day.svg";
  // } else {
  //   timeSrc = "icons/night.svg";
  // }
  time.setAttribute("src", timeSrc);

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
