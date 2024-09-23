const temperatureInput = document.getElementById("temperature");
const unit = document.getElementById("unit");
const result = document.getElementById("result");
let resultdisplay;

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    result.innerText = "Please Enter a value";
    result.style.opacity = 0;
    return;
  }
  if (unit.value === "celsius") {
    resultdisplay = (temperature * 9) / 5 + 32;
    result.innerText = `${temperature}°C is equal to ${resultdisplay.toFixed(
      2
    )}°F`;
  } else {
    resultdisplay = ((temperature - 32) * 5) / 9;
    result.innerText = `${temperature}°F is equal to ${resultdisplay.toFixed(
      2
    )}°C`;
  }
  result.style.opacity = 1;
}
