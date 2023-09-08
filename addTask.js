var myTask = "new Task";
var editedTask;

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

    var edit_field = document.createElement("td");
    var edit_input = document.createElement("input");
    edit_input.type = "submit";
    edit_input.value = "Edit";
    edit_input.onclick = editing;
    edit_field.appendChild(edit_input);
    

    newLine.appendChild(firstField);
    newLine.appendChild(secondField);
    newLine.appendChild(edit_field);

    myTable.appendChild(newLine);

    selection.addEventListener('change', () => changeColorTable(selection));

}

function changeColorTable(element){
    var columns = Array.from(element.parentNode.parentNode.childNodes);
    columns.push(element);
    columns.forEach(elem => {
        elem.classList.remove("line_wait", "line_done", "line_progress");
    });
    if(element.value==='1'){
        columns.forEach(v => {v.classList.add("line_wait");});
    } else if (element.value==='2'){
        columns.forEach(v => {v.classList.add("line_progress");});
    } else if (element.value==='3'){
        columns.forEach(v => {v.classList.add("line_done");});
    }
}

function editing(){
    console.log(this.parentNode.parentNode.childNodes[0].innerHTML);
    var task = this.parentNode.parentNode.childNodes[0];
    var string = task.innerHTML;
    var input = document.createElement("input");
    input.type = "text";
    input.value = string;
    input.classList.add("field");
    input.oninput = changeTask;
    var save = document.createElement("input");
    save.type = "submit";
    save.value = "save";
    save.classList.add("button");
    save.onclick = completeEditing;
    task.innerHTML = "";
    task.appendChild(input);
    task.appendChild(save);
}

function completeEditing(){
    var cell = this.parentNode;
    var string = myTask;
}

function changeTask(){
    this.innerHTML = this.value;
    console.log(this.value);
}