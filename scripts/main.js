var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    document.getElementById("add-to-do").onclick = processNewItem;
};
function processNewItem() {
    var item = getItemFromForm();
    saveItem(item);
    ClearForm();
    displayToDo(item);
}
function displayToDo(item) {
    var todoList = document.getElementById("to-do-list");
    var itemLi = document.createElement("li");
    todoList.appendChild(itemLi);
    itemLi.className = getClassName(item);
    itemLi.innerText = item.title;
    itemLi.ondblclick = toggleItemComplete;
    itemLi.setAttribute("data-description", item.description);
}
function getClassName(item) {
    if (item.isComplete) {
        return "completed list-group-item list-group-item-action list-group-item-success";
    }
    switch (item.urgency) {
        case "low":
            return "list-group-item list-group-item-action list-group-item-light";
        case "medium":
            return "list-group-item list-group-item-action list-group-item-warning";
        case "high":
            return "list-group-item list-group-item-action list-group-item-danger";
    }
}
function toggleItemComplete() {
    var currItem = this;
    currItem.classList.toggle("completed");
    var title = currItem.innerText;
    var description = currItem.getAttribute("data-description");
}
function getItemFromForm() {
    var item = new ToDoItem;
    item.title =
        document.getElementById("title").value;
    item.description =
        document.getElementById("description").value;
    var itemStartDate = document.getElementById("start-date").value;
    item.startDate = new Date(itemStartDate);
    var itemEndDate = document.getElementById("end-date").value;
    item.endDate = new Date(itemEndDate);
    item.isComplete =
        document.getElementById("is-complete").checked;
    item.urgency =
        document.getElementById("urgency").value;
    console.log(item);
    return item;
}
function ClearForm() {
    var textElems = document.querySelectorAll("#create-item > input[type=text], textarea");
    for (var i = 0; i < textElems.length; i++) {
        textElems[i].value = "";
    }
    document.getElementById("is-complete").checked = false;
    document.getElementById("urgency").value;
}
function saveItem(item) {
    console.log("Converting todoItem into JSON string....");
    console.log(JSON.stringify(item));
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("todo", JSON.stringify(item));
    }
}
