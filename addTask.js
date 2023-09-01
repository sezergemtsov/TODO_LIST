var myTask = "new Task";

function createTableElement(value, id) {

    var myTable = document.getElementById(id);

    var newLine = document.createElement("tr");

    var firstField = document.createElement("td");
    firstField.innerHTML = myTask;

    var secondField = document.createElement("td");

    var selection = document.createElement("select");

    var option1 = document.createElement("option");
    option1.innerHTML = "Done";

    var option2 = document.createElement("option");
    option2.innerHTML = "In Process";

    var option3 = document.createElement("option");
    option3.innerHTML = "In Process";

    selection.appendChild(option1);
    selection.appendChild(option2);
    selection.appendChild(option3);

    secondField.appendChild(selection);

    newLine.appendChild(firstField);
    newLine.appendChild(secondField);

    myTable.appendChild(newLine);

}