var row = 1;

var submit = document.getElementById("submit");
submit.addEventListener("click",displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var empid = document.getElementById("empid").value;
    var salary = document.getElementById("salary").value;
    var gender = document.getElementById("gender").value;

    if(!name || !empid || !salary || !gender) {
        alert("please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = empid;
    cell3.innerHTML = salary;
    cell4.innerHTML = gender;

    row++;
}