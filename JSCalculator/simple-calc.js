var firstDigit = document.getElementById('first-digit');
var secondDigit = document.getElementById('second-digit');
var result = document.getElementById('result');

addition.addEventListener('click', function() {
    result.innerHTML = parseFloat(firstDigit.value) + parseFloat(secondDigit.value);
})

subtraction.addEventListener('click', function() {
    result.innerHTML = parseFloat(firstDigit.value) - parseFloat(secondDigit.value);
})

multiplication.addEventListener('click', function() {
    result.innerHTML = parseFloat(firstDigit.value) * parseFloat(secondDigit.value);
})

division.addEventListener('click', function() {
    result.innerHTML = parseFloat(firstDigit.value) / parseFloat(secondDigit.value);
})
