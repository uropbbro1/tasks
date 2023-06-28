import { useState } from 'react';
import './App.css';
import TreeNode from './components/TreeNode';
import AddTask from './components/AddTask';

function App() {
  const [children, setChildren] = useState([]);
  const [addTaskVisibility, setAddTaskVisibility] = useState(false);
  const changeAddTaskVisibility = () => {
    setAddTaskVisibility(!addTaskVisibility);
  }

  return (
    <div className="Tree">
      <h1>Список дел</h1>
      {addTaskVisibility && <AddTask addTaskVisibility={addTaskVisibility} setAddTaskVisibility={setAddTaskVisibility}
      children={children} setChildren={setChildren}/> }
      {children.length > 0 ? <TreeNode/>
      :
      <div>
        <p>На данный момент нет задач</p>
        <button onClick={changeAddTaskVisibility}>Добавить задачу</button>
      </div>
      }
    </div>
  );
};

export default App;
