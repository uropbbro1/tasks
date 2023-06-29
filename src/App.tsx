import React, {useState} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import TreeNode from './components/TreeNode';
import lightTheme from './assets/lightTheme.svg';
import darkTheme from './assets/darkTheme.svg';
import ChangeTheme from './store/ChangeTheme';
import ChangeAddTaskVisibility from './store/ChangeAddTaskVisibility';
import { observer } from 'mobx-react-lite';
import ChangeChildren from './store/ChangeChildren';

const App = observer(() => {
  const [nodeName, setNodeName] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');

  return (
    <div className={ChangeTheme.blackThemeActive ? "Tree BlackTheme" : "Tree"}>
      <div className={ChangeTheme.blackThemeActive ? 'header BlackTheme' : 'header'}>
        {!ChangeAddTaskVisibility.addTaskVisibility && <h1 className={ChangeTheme.blackThemeActive ? 'TaskListText BlackTheme' : 'TaskListText'}>Список дел</h1>}
        {ChangeTheme.blackThemeActive ? <button onClick={() => ChangeTheme.ChangeTheme()}><img src={lightTheme} alt='lightTheme'/></button>
        : <button onClick={() => ChangeTheme.ChangeTheme()}><img src={darkTheme} alt='blackTheme'/></button>}
      </div>
      {ChangeAddTaskVisibility.addTaskVisibility && <AddTask setNodeName={setNodeName} setNodeDescription={setNodeDescription}/>}
      {ChangeChildren.children.length > 0 ? <TreeNode name={nodeName} description={nodeDescription}/>
      : !ChangeAddTaskVisibility.addTaskVisibility ?
      <div className='EmptyTaskList'>
        <p className={ChangeTheme.blackThemeActive ? 'EmptyTaskListText BlackTheme' : 'EmptyTaskListText'}>На данный момент список задач пуст.</p>
        <button className='btn btn-success' onClick={() => ChangeAddTaskVisibility.addTaskVisibilityChange()}>Добавить задачу</button>
      </div>
      : null
      }
    </div>
  );
});

export default App;
