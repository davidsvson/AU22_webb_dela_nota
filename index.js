const button = document.getElementById('calculateButton');

function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseInt(tip) / 100;
    return calculatedTip;
}

function divideTotal(total, numberOfFriends) {
    return total / parseInt(numberOfFriends);
}

function displayDividedSum(sum) {
    const element = document.getElementById('friendSum');
    element.innerHTML = sum + ' kr';

    const inputForm = document.getElementById('inputForm');
    inputForm.classList.toggle('hide');

    document.getElementById('showSum').classList.toggle('hide');
}

button.addEventListener('click', function() {
   // console.log('KLick klick');
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;

    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    displayDividedSum(friendSum);
})


// swift    JS
// let      const
// var      let
// --       var - gammalt: använd ej
