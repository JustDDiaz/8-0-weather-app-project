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
        const resultDef = document.querySelector(".result p");
        resultDef.textContent = ``;
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
        const today = document.querySelector(".today h3");
        today.removeAttribute("hidden");
        const todayAve = document.querySelector(".today .ave");
        todayAve.textContent = `Average Temperature: ${weather.weather[0].avgtempF}°F`;
        const todayMax = document.querySelector(".today .max");
        todayMax.textContent = `Max Temperature ${weather.weather[0].maxtempF}°F`;
        const todayMin = document.querySelector(".today .min");
        todayMin.textContent = `Min Temperature ${weather.weather[0].mintempF}°F`;
        const tommorrow = document.querySelector(".tommorrow h3");
        tommorrow.removeAttribute("hidden");
        const tommAve = document.querySelector(".tommorrow .ave");
        tommAve.textContent = `Average Temperature: ${weather.weather[1].avgtempF}°F`;
        const tommMax = document.querySelector(".tommorrow .max");
        tommMax.textContent = `Max Temperature ${weather.weather[1].maxtempF}°F`;
        const tommMin = document.querySelector(".tommorrow .min");
        tommMin.textContent = `Min Temperature ${weather.weather[1].mintempF}°F`;
        const after = document.querySelector(".after h3");
        after.removeAttribute("hidden");
        const aftAve = document.querySelector(".after .ave");
        aftAve.textContent = `Average Temperature: ${weather.weather[2].avgtempF}°F`;
        const aftMax = document.querySelector(".after .max");
        aftMax.textContent = `Max Temperature ${weather.weather[2].maxtempF}°F`;
        const aftMin = document.querySelector(".after .min");
        aftMin.textContent = `Min Temperature ${weather.weather[2].mintempF}°F`;
        const prevSer = document.querySelector(".history ul");
        const li = document.createElement("li");
        li.textContent = `${weather.nearest_area[0].areaName[0].value} - ${weather.current_condition[0].FeelsLikeF}°F`;
        prevSer.append(li);
        event.target.reset();
      }
      console.log(weather);
    });
});
