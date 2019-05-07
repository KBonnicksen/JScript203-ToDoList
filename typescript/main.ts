
/**
 * Represents a single task in a ToDo list
 */
class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
}

window.onload = function(){
    (<HTMLButtonElement>document.getElementById("add-to-do")).onclick = processNewItem;
}

function processNewItem(){
    //get data off the page and wrap in todo object
    //Notify user and clear form
    //Save ToDo object

    let item:ToDoItem = getItemFromForm();

    saveItem(item);
    notifyUser();
    ClearForm();
}

/**
 * Get all user input from Form
 * and wrap it in a ToDoItem
 */
function getItemFromForm():ToDoItem{
    let item = new ToDoItem;

    item.title = 
        (<HTMLInputElement>document.getElementById("title")).value;
    item.description = 
        (<HTMLInputElement>document.getElementById("description")).value;

    let itemStartDate:string = 
        (<HTMLInputElement>document.getElementById("start-date")).value;
    item.startDate = new Date(itemStartDate);

    let itemEndDate:string = 
        (<HTMLInputElement>document.getElementById("end-date")).value;
    item.endDate = new Date(itemEndDate);

    item.isComplete = 
        (<HTMLInputElement>document.getElementById("is-complete")).checked;
    item.urgency = 
        (<HTMLInputElement>document.getElementById("urgency")).value;

    console.log(item);
    return item;
}

function ClearForm():void{

    //can alternatively wrap all inputs in a <form> tag and reset form
    //clear out all text elements
    let textElems = document.querySelectorAll("#create-item > input[type=text], textarea");
    for (let i = 0; i < textElems.length; i++) {
        (<HTMLInputElement>textElems[i]).value = "";
    }

    //un-check checked box
    (<HTMLInputElement>document.getElementById("is-complete")).checked = false;

    //reset select list
    document.getElementById("urgency").val
}

function notifyUser():void{
    alert("Your item was saved");
}

function saveItem(item:ToDoItem):void{
    console.log("Converting todoItem into JSON string....");
    console.log(JSON.stringify(item));
    //ensure user can use localStorage
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("todo", JSON.stringify(item));
        notifyUser();
    }
}

