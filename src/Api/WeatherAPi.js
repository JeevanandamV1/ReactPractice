export default async function getWeatherData(city) {
  try {
    const APIkey = "2ac4ec20fd0146de8fba0a9d3dfe7e24";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    );

    if (!response.ok) {
      console.log(`response status : ${response.status}`);
    } else {
      console.error(`response error : ${response.error}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`error message : ${error.message}`);
  }
}
