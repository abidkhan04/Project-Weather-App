const cityForm = document.querySelector("form");

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
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
