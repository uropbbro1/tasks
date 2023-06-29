import React from "react";
import { useState } from 'react';
import '../App.css';

interface AddTaskProps{
    children: object[];
    addTaskVisibility: boolean;
    blackThemeActive: boolean;
    
    setChildren: React.Dispatch<React.SetStateAction<object[]>>;
    setAddTaskVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setNodeName: React.Dispatch<React.SetStateAction<string>>;
    setNodeDescription: React.Dispatch<React.SetStateAction<string>>;
}

const AddTask:React.FC<AddTaskProps> = 
    ({
        children,
        addTaskVisibility,
        blackThemeActive,
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
            <h1>Создание задачи</h1>
            <form onSubmit={addNode} className="AddTaskForm">
                <input 
                    type="text" 
                    value={taskName} onChange={(e) => setTaskName(e.target.value)}
                    className={blackThemeActive ? 'TaskName BlackTheme' : 'TaskName'}
                    placeholder="Задача" required
                />

                <textarea 
                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                    className={blackThemeActive ? 'TaskDescription BlackTheme' : 'TaskDescription'}
                    placeholder='Описание задачи'
                />

                <button type="submit" className="btn btn-success addTaskButton">Добавить задачу</button>
            </form>
        </div>
    )
}

export default AddTask;