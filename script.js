document.getElementById('convertToFeet').addEventListener('click', function () {
    const meters = parseFloat(document.getElementById('meters').value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084; 
        document.getElementById('feet').value = feet.toFixed(2);
    } else {
        alert('Lūdzu ievadi normālu skaitli.');
    }
});

document.getElementById('convertToMeters').addEventListener('click', function () {
    const feet = parseFloat(document.getElementById('feet').value);
    if (!isNaN(feet)) {
        const meters = feet / 3.28084; 
        document.getElementById('meters').value = meters.toFixed(2);
    } else {
        alert('Lūdzu ievadi normālu skaitli.');
    }
});