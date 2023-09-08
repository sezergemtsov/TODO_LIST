var myTask = "new Task";
var editedTask;
var isEdited = "false";

function createTableElement(value, id) {

    var myTable = document.getElementById(id);

    var newLine = document.createElement("tr");
    newLine.id = Math.round(Math.random()*1000, 3)*1000 + Math.round(Math.random()*1000, 3);

	newLine.innerHTML = `
        <td class="td1">${myTask}</td>
        <td class="td2">
            <select class="select">
                <option value="1">Waiting</option>
                <option value="2">In Process</option>
                <option value="3">Done</option>
            </select>
        </td>
        <td>
            <button class="b1">Edit</button>
        </td>
	`;
    myTable.appendChild(newLine);

    var edit_button = newLine.querySelector('.b1');
    var selection = newLine.querySelector('.select');

    edit_button.addEventListener('click', editing.bind(edit_button));
    selection.addEventListener('change', () => changeColorTable(selection));

}

function changeColorTable(element){
    var columns = Array.from(element.parentNode.parentNode.querySelectorAll('td'));
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
    if(isEdited==="false"){
        isEdited="true";
        console.log(this.parentNode.parentNode.childNodes[0].innerHTML);
        var task = this.parentNode.parentNode.querySelector('td');
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
        editedTask = task.innerHTML;
        task.innerHTML = "";
        task.appendChild(input);
        task.appendChild(save);
    } else {
        alert("Please complete editing in other fields first");
    }

}

function completeEditing(){
    if(isEdited==="true"){
        var cell = this.parentNode;
        cell.innerHTML = editedTask;
        isEdited="false";
    }

}

function changeTask(){
    if(isEdited==="true"){
        editedTask = this.value;
    }
}
