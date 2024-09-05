document.getElementById('calculate-button').addEventListener('click', function() {
    let weightPounds = parseFloat(document.getElementById('weight').value) || 0;
    let heightFeet = parseFloat(document.getElementById('feet').value) || 0;
    let heightInches = parseFloat(document.getElementById('inches').value) || 0;
    let age = parseInt(document.getElementById('age').value) || 0;

    if (age < 2 || age > 120) {
        document.getElementById('age-result').innerText = 'Invalid age. Please enter an age between 2 and 120 years.';
        document.getElementById('bmi-result').innerText = '';
        document.getElementById('bmi-category').innerText = '';
        document.getElementById('ideal-weight').innerText = '';
        return;
    } else {
        document.getElementById('age-result').innerText = ''; 
    }

    //// Convert  to kilograms/////
    let weightKilograms = weightPounds * 0.453592;

    // Convert to meters//////
    let totalInches = (heightFeet * 12) + heightInches;
    let heightMeters = totalInches * 0.0254;

    // Check for valid inputs///////////
    if (weightKilograms <= 0 || heightMeters <= 0) {
        document.getElementById('bmi-result').innerText = 'Please enter valid weight and height.';
        document.getElementById('bmi-category').innerText = '';
        document.getElementById('ideal-weight').innerText = '';
        return;
    }

    // Calculate BMI////////
    let bmi = weightKilograms / (heightMeters * heightMeters);
    bmi = bmi.toFixed(2);

    document.getElementById('bmi-result').innerText = `BMI: ${bmi} kg/m²`;

    let category = '';
    let idealWeightMessage = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        idealWeightMessage = '';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        idealWeightMessage = `Your weight ${weightPounds} pound is deal`;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        idealWeightMessage = '';
    } else {
        category = 'Obese';
        idealWeightMessage = '';
    }

    document.getElementById('bmi-category').innerText = `Status: ${category}`;
    document.getElementById('ideal-weight').innerText = idealWeightMessage;
});
