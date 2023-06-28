import '../App.css'
import { useState } from 'react';
import TaskInfo from './TaskInfo';

const TreeNode = (props) => {
  const [children, setChildren] = useState([]);
  const [input, setInput] = useState(props.name + "-0");
  const [description, setDescription] = useState(props.name + "-0");
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false);

  const addNode = (e) => {
    e.preventDefault();
    setChildren((children) => [...children, { name: input,  description: description, children: [] }]);
    setInput(`${input}-${children.length + 1}`);
    setDescription(description);
  }

  const removeNode = (e) => {
    setChildren((children) => [...children, children.splice(children.length, 1)]);
    return false;
  }

  return (
    <div className="TreeNode">
        <div className='TreeItem'>
          <span><button className='btn' onClick={() => setTaskInfoVisibility(!taskInfoVisibility)}>{props.name}</button></span>
          <input id='check' type="checkbox"/>
        </div>
        <div className='TaskActions'>
          <form onSubmit={addNode}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder='Задача'
            />
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Описание задачи'
            />
            <button type="submit">Добавить задачу</button>
          </form>
          <button type="button" onClick={removeNode}>Удалить задачу</button>
        </div>
      {taskInfoVisibility && <TaskInfo name={props.name} description={props.description}/>}
      <div className="children">
        {children &&
          children.map((item, index) => {
            return <TreeNode key={index} name={item.name} description={item.description}/>;
          })
        }
      </div>
    </div>
  );
}

export default TreeNode;
