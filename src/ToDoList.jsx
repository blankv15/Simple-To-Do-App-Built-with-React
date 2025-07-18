import React, { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)

    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }


    }
    function deleteTask(index) {

        const updatedTasks = tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks)

    }
    function moveTaskUp(index) {

        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index) {
                if (index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }


    }

    return (
        <>
            <div className="to-do-list">
                <h1>To Do list</h1>

                <div>
                    <input
                        className="task-text-field" 
                        type="text"
                        placeholder="Enter a Task"
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button
                        className="add-button"
                        onClick={addTask}
                    >Add</button>

                </div>

                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span>{task}</span>
                            <button 
                            className="delete-button"
                                onClick={() => deleteTask(index)}
                            >delete
                            </button>
                            <button
                            className="move-button"
                                onClick={() => moveTaskUp(index)}
                            >👆
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}
                            >👇
                            </button>

                        </li>
                    )}

                </ol>

            </div>

        </>
    )
}
export default ToDoList