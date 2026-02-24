let subjects = [];

function addSubject() {

    let name = document.getElementById("subject").value;
    let diff = parseInt(document.getElementById("difficulty").value);

    if (name === "") {
        alert("Enter subject name");
        return;
    }

    subjects.push({ name: name, weight: diff });

    displaySubjects();

    document.getElementById("subject").value = "";
}

function displaySubjects() {

    let list = document.getElementById("subjectList");
    list.innerHTML = "";

    subjects.forEach(s => {
        let li = document.createElement("li");
        li.innerText = s.name;
        list.appendChild(li);
    });
}

function generatePlan() {

    let hours = parseFloat(document.getElementById("hours").value);

    if (subjects.length === 0) {
        alert("Add subjects first");
        return;
    }

    let totalWeight = 0;

    subjects.forEach(s => {
        totalWeight += s.weight;
    });

    let output = document.getElementById("output");
    output.innerHTML = "";

    subjects.forEach(s => {

        let time = (s.weight / totalWeight) * hours;

        let li = document.createElement("li");
        li.innerText = s.name + " = " + time.toFixed(1) + " hrs";

        output.appendChild(li);

    });
}
