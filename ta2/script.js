function sumAll(a, b) {
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    console.log(sum);
}

function convertToCelsius(temp) {
    let celsius = (temp - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10;
}

function convertToFahrenheit(temp) {
    let fahrenheit = (temp * 9 / 5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}

function leapYears(anio) {
    let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    console.log(esBisiesto);
}

function getSum(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
        suma += nums[i];
    }
    console.log(suma);
}

