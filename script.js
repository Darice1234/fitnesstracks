function show() {
    let mins = Number(document.getElementById("mins").value);
    let goal = Number(document.getElementById("goal").value);

    if (!mins || !goal) {
        alert("Enter");
        return;
    }

    let calories = mins * 5;

    let message = (mins >= goal) ? "Great" : "Try";

    document.getElementById("output").innerHTML =
        "Minutes: " + mins + "<br>" +
        "Calories burned: " + calories + "<br>" +
        message + "<br>";
}

function reset() {
    document.getElementById("mins").value = "";
    document.getElementById("goal").value = "";
    document.getElementById("output").innerHTML = "";
}
