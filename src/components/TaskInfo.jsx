import React from "react";

const TaskInfo = (props) => {
    return(
        <div className="TaskInfo">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default TaskInfo;