// Updated from feature branch
const city = process.argv[2];

if (!city) {
  console.log("Please provide a city name.");
  process.exit(1);
}

const apiKey = "YOUR_API_KEY";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;

    console.log(`Weather in ${city}: ${temperature}°C, ${description}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getWeather();