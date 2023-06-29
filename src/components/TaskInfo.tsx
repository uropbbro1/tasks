import ChangeTheme from "../store/ChangeTheme";

interface TaskInfoProps{
    name: string;
    description: string;
}

const TaskInfo:React.FC<TaskInfoProps> = ({name, description}: TaskInfoProps) => {
    return(
        <div className={ChangeTheme.blackThemeActive ?  'TaskInfo BlackTheme' : 'TaskInfo'}>
            <h1>Подробности задачи</h1>
            <h2>Название задачи: {name}</h2>
            <p>Описание задачи:<br/>{description}</p>
        </div>
    )
}

export default TaskInfo;