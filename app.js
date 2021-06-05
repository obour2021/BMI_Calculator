
let BMI_calculate = _ => {
    let weight = document.getElementById("weight").value;
    let height= document.getElementById("height").value;
    let BMI = (weight / (Math.pow(height,2)/1)).toFixed(1);

    if (BMI < 18.5) {
        document.getElementById("bmi").style.display="block";
        document.getElementById("bmi").innerHTML="Your BMI is " + BMI +", so you are underweight.";
    }

    else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById("bmi").style.display="block";
        document.getElementById("bmi").innerHTML="Your BMI is " + BMI +", so you are normal weight.";
    }

    else if (BMI > 24.9 && BMI <= 29.9) {
        document.getElementById("bmi").style.display="block";
        document.getElementById("bmi").innerHTML="Your BMI is " + BMI +", so you are overweight.";
    }

    if (BMI > 29.9 && BMI <= 34.9) {
        document.getElementById("bmi").style.display="block";
        document.getElementById("bmi").innerHTML="Your BMI is " + BMI +", so you are obese.";
    }
    if (BMI > 34.9) {
        document.getElementById("bmi").style.display="block";
        document.getElementById("bmi").innerHTML="Your BMI is " + BMI +", so you are extremely obese.";
    }

    
}

document.getElementById("bmi").style.display="none";

document.getElementById("btn").onclick = function() { BMI_calculate(); }; 





