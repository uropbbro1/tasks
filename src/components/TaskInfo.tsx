interface TaskInfoProps{
    name: string;
    description: string;
}

const TaskInfo:React.FC<TaskInfoProps> = ({name, description}: TaskInfoProps) => {
    return(
        <div className="TaskInfo">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default TaskInfo;