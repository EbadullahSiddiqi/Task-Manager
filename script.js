const addTask = document.querySelector(".add-task");
const addTaskPopup = document.querySelector(".add-task-popup");
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const taskList = document.querySelector(".task-list");
var taskCount;

window.onload = () => {
    // localStorage.clear();

    if(localStorage.getItem("counter")) {
        taskCount = localStorage.getItem("counter");
    } else {
        taskCount = 0;
    }
    reloadTask();
}

// Popup
addTask.addEventListener("click", () => {
    addTaskPopup.style.display = "flex";
})

// Adding Task
btn.addEventListener("click", () => {
    addTaskPopup.style.display = "none";
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    newTask();
})

// Creates the HTML Elements for the Task and adds them to the page
function newTask() {
    console.log(taskCount);
    if (title.value != "" && description.value !="") {
        let task = document.createElement("div");
        task.setAttribute("class", "task");
        taskList.prepend(task);

        let titleHead = document.createElement("h3");
        let desPara = document.createElement("p");
        task.append(titleHead);
        task.append(desPara);

        addValues(titleHead, desPara);

        localStorage.setItem(`title${taskCount}`, title.value);
        localStorage.setItem(`description${taskCount}`, description.value);

        taskCount++;
        localStorage.setItem("counter", taskCount);
        
        var task_task = document.querySelector(".task");
        task_task.addEventListener("click", () => {
            for(let i = 1; i <= taskCount; i++) { 
                // loops through every data in loacl to delete the chosen task
                if (titleHead.innerText == localStorage.getItem(`title${i}`) && desPara.innerText == localStorage.getItem(`description${i}`)) {
                    task.remove();
                    localStorage.removeItem(`title${i}`);
                    localStorage.removeItem(`description${i}`);
                }
            }
        })
    } else {
        alert("Fill the info first!");
    }
}

// Displays the Title and Description of the Task
function addValues(tit, des) {
    let taskTitle = title.value;
    tit.innerText = taskTitle;

    let taskDescription = description.value;
    des.innerText = taskDescription;
}

function reloadTask() {
    for(let j = 0; j < taskCount; j++) {
        if (localStorage.getItem(`title${j}`) && localStorage.getItem(`description${j}`)) {
            let task = document.createElement("div");
            task.setAttribute("class", "task");
            taskList.prepend(task);
    
            var titleHead = document.createElement("h3");
            var desPara = document.createElement("p");
            task.append(titleHead);
            task.append(desPara);
    
            titleHead.innerText = localStorage.getItem(`title${j}`);;

            desPara.innerText = localStorage.getItem(`description${j}`);
    
            var task_task = document.querySelector(".task");
    
            task_task.addEventListener("click", () => {
                removeTaskReload(task, j);
            })
        } else {
            console.log("Nothing");
        }
    }
}

function removeTaskReload(task, j) {
    task.remove();
    localStorage.removeItem(`title${j}`);
    localStorage.removeItem(`description${j}`);
    localStorage.getItem("counter")--;
}