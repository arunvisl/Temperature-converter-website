function convertTemperature()
{
    var temperatureInput = document.getElementById('temperature').value;
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');
    var convertedTemperature;

    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Please enter a valid number';
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.textContent = convertedTemperature.toFixed(2) + ' °F';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultElement.textContent = convertedTemperature.toFixed(2) + ' °C';
    }
   
 }

