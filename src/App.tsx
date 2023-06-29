import React, {useState} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import TreeNode from './components/TreeNode';
import lightTheme from './assets/lightTheme.svg';
import darkTheme from './assets/darkTheme.svg';

function App() {
  const [children, setChildren] = useState<object[]>([]);
  const [addTaskVisibility, setAddTaskVisibility] = useState(false);
  const [nodeName, setNodeName] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');
  const [blackThemeActive, setBlackThemeActive] = useState(true);

  const changeAddTaskVisibility = () => {
    setAddTaskVisibility(!addTaskVisibility);
  }

  const changeBlackThemeActive = () => {
    setBlackThemeActive(!blackThemeActive);
  }

  return (
    <div className={blackThemeActive ? "Tree BlackTheme" : "Tree"}>
      <div className={blackThemeActive ? 'header BlackTheme' : 'header'}>
        {!addTaskVisibility && <h1 className={blackThemeActive ? 'TaskListText BlackTheme' : 'TaskListText'}>Список дел</h1>}
        {blackThemeActive ? <button onClick={changeBlackThemeActive}><img src={lightTheme} alt='lightTheme'/></button>
        : <button onClick={changeBlackThemeActive}><img src={darkTheme} alt='blackTheme'/></button>}
      </div>
      {addTaskVisibility && <AddTask addTaskVisibility={addTaskVisibility} setAddTaskVisibility={setAddTaskVisibility}
      children={children} setChildren={setChildren} setNodeName={setNodeName} setNodeDescription={setNodeDescription} blackThemeActive={blackThemeActive}/>}
      {children.length > 0 ? <TreeNode name={nodeName} description={nodeDescription} blackThemeActive={blackThemeActive}/>
      : !addTaskVisibility ?
      <div className='EmptyTaskList'>
        <p className={blackThemeActive ? 'EmptyTaskListText BlackTheme' : 'EmptyTaskListText'}>На данный момент список задач пуст.</p>
        <button className='btn btn-success' onClick={changeAddTaskVisibility}>Добавить задачу</button>
      </div>
      : null
      }
    </div>
  );
}

export default App;
