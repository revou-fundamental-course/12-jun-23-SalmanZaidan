 <script>
 function convertTemperature() {

    const temperatureInput = 

document.getElementById('temperature');

    const temperature = 

parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {

      alert('Masukkan suhu yang valid!');

      return;

    }

    const celsius = (temperature - 32) * 5 / 9;

    const fahrenheit = temperature * 9 / 5 + 32;

    const resultElement = 

document.getElementById('result');

    resultElement.innerHTML = `Celsius: $

{celsius.toFixed(2)}°C<br>Fahrenheit: $

{fahrenheit.toFixed(2)}°F`;

    const resultContainer = 

document.getElementById('result-container');

    resultContainer.style.display = 'block';

  }

</script>
