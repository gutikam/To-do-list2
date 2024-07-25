const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", function(){
    addTask();
})

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
})

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.textContent = taskValue;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function(){
        taskList.removeChild(taskItem)
    })

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}