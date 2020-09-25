import { useTasks, getTasks} from "./TaskDataProvider.js";
import { TaskInputField } from "./Task.js";

// DOM reference to where all tasks will be rendered
const taskLog = document.querySelector("#taskList")
const eventHub = document.querySelector(".main")


const render = (taskTaco) => {
    let HTMLarray = taskTaco.map((word) => TaskInputField(word))
    taskLog.innerHTML = HTMLarray.join("")
}


export const TaskListComponent = () => {
    // Use the task data from the data provider component
    getTasks()
        .then(() => {
            const tasks = useTasks()
            render(tasks)
        })
    }


eventHub.addEventListener("savedTask", event => {
    TaskListComponent()
})

// eventHub.addEventListener("checkboxComplete", event => {
//     const clickedBox = event.detail.isCompleted === true
// })