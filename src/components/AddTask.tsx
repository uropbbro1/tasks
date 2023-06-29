import React from "react";
import { useState } from 'react';

interface AddTaskProps{
    children: object[];
    addTaskVisibility: boolean;
    
    setChildren: React.Dispatch<React.SetStateAction<object[]>>;
    setAddTaskVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setNodeName: React.Dispatch<React.SetStateAction<string>>;
    setNodeDescription: React.Dispatch<React.SetStateAction<string>>;
}

const AddTask:React.FC<AddTaskProps> = 
    ({
        children,
        addTaskVisibility,
        setChildren,
        setAddTaskVisibility,
        setNodeName,
        setNodeDescription
    }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const addNode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTaskName(`${taskName}-${children.length + 1}`);
        setChildren([...children, { name: taskName, description: taskDescription, children: [] }]);
        setAddTaskVisibility(!addTaskVisibility);
        setNodeName(taskName);
        setNodeDescription(taskDescription);
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