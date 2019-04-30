window.onload = functon{

}

class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
}

let testItem = new ToDoItem();
testItem.title = "Go to class";
testItem.description = "Wake up, get ready, drive and listen to podcast";
testItem.startDate = new Date("April 30, 2019");
testItem.endDate = new Date("April 30, 2019");
testItem.isComplete = false;
if(testItem.isComplete){
    //do something
}