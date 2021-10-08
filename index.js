document.querySelector(".form form").addEventListener("submit", (event) => {
  event.preventDefault();
  const search = event.target.weather.value;
  console.log(search);
  fetch(`https://wttr.in/${search}?format=j1`)
    .then((response) => response.json())
    .then((weather) => {
      if (!search.length) {
        const resultArea = document.querySelector(".result p");
        resultArea.textContent = `Enter Location.`;
        document.querySelector(".result p").classList.add("error");
        event.target.reset();
      } else {
        const resultH2 = document.querySelector(".result h2");
        resultH2.textContent = weather.nearest_area[0].areaName[0].value;
        const resultArea = document.querySelector(".result .area");
        resultArea.textContent = `Area: ${weather.nearest_area[0].areaName[0].value}`;
        const resultReg = document.querySelector(".result .region");
        resultReg.textContent = `Region: ${weather.nearest_area[0].region[0].value}`;
        const resultCountry = document.querySelector(".result .country");
        resultCountry.textContent = `Country: ${weather.nearest_area[0].country[0].value}`;
        const resultCurr = document.querySelector(".result .currently");
        resultCurr.textContent = `Currently: Feels like ${weather.current_condition[0].FeelsLikeF}°F`;
      }
      console.log(weather);
    });
});
