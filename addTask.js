var myTask = "new Task";

function createTableElement(value, id) {

    var myTable = document.getElementById(id);

    var newLine = document.createElement("tr");
    newLine.id = Math.round(Math.random()*1000, 3)*1000 + Math.round(Math.random()*1000, 3);

    var firstField = document.createElement("td");
    firstField.innerHTML = myTask;

    var secondField = document.createElement("td");

    var selection = document.createElement("select");

    console.log(selection.id);

    var option1 = document.createElement("option");
    option1.innerHTML = "Waiting";
    option1.value = "1";

    var option2 = document.createElement("option");
    option2.innerHTML = "In Process";
    option2.value = "2";

    var option3 = document.createElement("option");
    option3.innerHTML = "Done";
    option3.value = "3";

    selection.appendChild(option1);
    selection.appendChild(option2);
    selection.appendChild(option3);

    secondField.appendChild(selection);

    newLine.appendChild(firstField);
    newLine.appendChild(secondField);

    myTable.appendChild(newLine);

    selection.addEventListener('change', () => changeColor(selection));

}

function changeColor(element){
    var selection = element;
    var column = element.parentNode;
    var firstColumn = element.parentNode.parentNode.childNodes[0];
    selection.classList.remove("line_wait", "line_done", "line_progress");
    column.classList.remove("line_wait", "line_done", "line_progress");
    firstColumn.classList.remove("line_wait", "line_done", "line_progress");
    var option = selection.value;
    console.log(option);
    if(option==='1'){
        selection.classList.add("line_wait");
        column.classList.add("line_wait");
        firstColumn.classList.add("line_wait");
    } else if(option==='2') {
        selection.classList.add("line_progress");
        column.classList.add("line_progress");
        firstColumn.classList.add("line_progress");
    } else if(option==='3'){
        selection.classList.add("line_done");
        column.classList.add("line_done");
        firstColumn.classList.add("line_done");
    }
}