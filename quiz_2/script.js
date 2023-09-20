function EvenorOdd() {
    const numberInput = document.getElementById("input");
    const result = document.getElementById("output");
    const number = parseInt(numberInput.value);
    if (number % 2 == 0) {
            result.textContent = `${number} is an even number.`;
    }
    else {
            result.textContent = `${number} is an odd number.`;
    }
}

function cal_CGPA() {
    const marks = [
        parseFloat(document.getElementById("mark1").value),
        parseFloat(document.getElementById("mark2").value),
        parseFloat(document.getElementById("mark3").value),
        parseFloat(document.getElementById("mark4").value),
        parseFloat(document.getElementById("mark5").value)
    ];

    const creditHours = [
        parseInt(document.getElementById("credit1").value),
        parseInt(document.getElementById("credit2").value),
        parseInt(document.getElementById("credit3").value),
        parseInt(document.getElementById("credit4").value),
        parseInt(document.getElementById("credit5").value)
    ];

    const totalCreditHours = creditHours.reduce((total, credit) => total + credit, 0);
    let weightedSum = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert("Marks should be between 0 and 100.");
            return;
        }
        weightedSum += (marks[i] / 100) * creditHours[i];
    }

    const cgpa = (weightedSum / totalCreditHours) * 4; 

    document.getElementById("result").textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
