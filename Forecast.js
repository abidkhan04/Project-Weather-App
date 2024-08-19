const key = "Ygcz8q74tNVve7vUSAVzGR3PHl3HjLIY";

// To Get Weather Information

const getweather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);

  const data = await response.json();
  return data[0];
};

// To Get city Information
const city = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();
  return data[0];
};

city("Islamabad")
  .then((data) => {
    return getweather(data.Key);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// getweather("258278");
