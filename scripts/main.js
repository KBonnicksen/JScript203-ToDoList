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
    notifyUser();
    ClearForm();
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
}
function notifyUser() {
}
function saveItem(item) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("todo", item.title);
    }
}
