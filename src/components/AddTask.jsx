import React from "react";
import { useState } from 'react';

const AddTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const addNode = (e) => {
        e.preventDefault();
        setTaskName(`${taskName}-${props.children.length + 1}`);
        props.setChildren([...props.children, { name: taskName, description: taskDescription, children: [] }]);
        props.setAddTaskVisibility(!props.addTaskVisibility);
        console.log(props.children)
    }

    return(
        <div className="AddTask">
            <form onSubmit={addNode} className="AddTaskForm">
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="taskName" placeholder="Задача" required/>

                <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                className="taskDescription" placeholder='Описание задачи'/>

                <button type="submit" className="btn btn-success addTaskButton">Добавить задачу</button>
            </form>
        </div>
    )
}

export default AddTask;