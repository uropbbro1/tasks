import React from "react";
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ChangeAddTaskVisibility from "../store/ChangeAddTaskVisibility";
import ChangeTheme from "../store/ChangeTheme";
import ChangeChildren from "../store/ChangeChildren";

interface AddTaskProps{
    setNodeName: React.Dispatch<React.SetStateAction<string>>;
    setNodeDescription: React.Dispatch<React.SetStateAction<string>>;
}

const AddTask:React.FC<AddTaskProps> = 
    observer(({
        setNodeName,
        setNodeDescription
    }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const addNode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTaskName(`${taskName}-${ChangeChildren.children.length + 1}`);
        ChangeChildren.addNode(taskName, taskDescription);
        ChangeAddTaskVisibility.addTaskVisibilityChange();
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
                    className={ChangeTheme.blackThemeActive ? 'TaskName BlackTheme' : 'TaskName'}
                    placeholder="Задача" required
                />

                <textarea 
                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                    className={ChangeTheme.blackThemeActive ? 'TaskDescription BlackTheme' : 'TaskDescription'}
                    placeholder='Описание задачи'
                />

                <button type="submit" className="btn btn-success addTaskButton">Добавить задачу</button>
            </form>
        </div>
    )
});

export default AddTask;