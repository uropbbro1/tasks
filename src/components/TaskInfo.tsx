interface TaskInfoProps{
    name: string;
    description: string;
    blackThemeActive: boolean;
}

const TaskInfo:React.FC<TaskInfoProps> = ({name, description, blackThemeActive}: TaskInfoProps) => {
    return(
        <div className={blackThemeActive ?  'TaskInfo BlackTheme' : 'TaskInfo'}>
            <h1>Подробности задачи</h1>
            <h2>Название задачи: {name}</h2>
            <p>Описание задачи:<br/>{description}</p>
        </div>
    )
}

export default TaskInfo;