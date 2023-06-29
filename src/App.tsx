import React, {useState} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import TreeNode from './components/TreeNode';

function App() {
  const [children, setChildren] = useState<object[]>([]);
  const [addTaskVisibility, setAddTaskVisibility] = useState(false);
  const [nodeName, setNodeName] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');

  const changeAddTaskVisibility = () => {
    setAddTaskVisibility(!addTaskVisibility);
  }

  return (
    <div className="Tree">
      <h1>Список дел</h1>
      {addTaskVisibility && <AddTask addTaskVisibility={addTaskVisibility} setAddTaskVisibility={setAddTaskVisibility}
      children={children} setChildren={setChildren} setNodeName={setNodeName} setNodeDescription={setNodeDescription}/>}
      {children.length > 0 ? <TreeNode name={nodeName} description={nodeDescription}/>
      : !addTaskVisibility ?
      <div>
        <p>На данный момент нет задач</p>
        <button onClick={changeAddTaskVisibility}>Добавить задачу</button>
      </div>
      : null
      }
    </div>
  );
}

export default App;
