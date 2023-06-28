import '../App.css'
import { useState } from 'react';
import TaskInfo from './TaskInfo';

const TreeNode = (props) => {
  const [children, setChildren] = useState([]);
  const [input, setInput] = useState(props.name + "-0");
  const [description, setDescription] = useState(props.name + "-0");
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false);
  const [checkboxesActive, setCheckboxesActive] = useState(false);

  const addNode = (e) => {
    e.preventDefault();
    setChildren((children) => [...children, { name: input,  description: description, children: [] }]);
    setInput('');
    setDescription('');
  }

  const removeNode = (e) => {
    e.preventDefault()
    setChildren(children.splice(props.index, props.index));
    console.log(children);
    return false;
  }

  const taskNameHandler = () => {
    let parent = document.getElementById('TreeItem');
    console.log(parent)
    let checkboxes = parent.querySelectorAll('input');
    console.log(checkboxes)
    for(let checkbox of checkboxes){
      if(!checkboxesActive){
        checkbox.checked = true;
        setCheckboxesActive(!checkboxesActive);
        setTaskInfoVisibility(!taskInfoVisibility)
      }else{
        checkbox.checked = false;
        setCheckboxesActive(!checkboxesActive);
        setTaskInfoVisibility(!taskInfoVisibility)
      }
    }
  }

  return (
    <div className="TreeNode">
        <div className='TreeItem' id='TreeItem'>
          <span><button className='btn' id='parent' type='button' onClick={taskNameHandler}>{props.name}</button></span>
          <input id='check' type="checkbox"/>
        </div>
        <div className='TaskActions'>
          <form onSubmit={addNode}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Задача'
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Описание задачи'
            />
            <button type="submit">Добавить подзадачу</button>
          </form>
          <button type="button" onClick={removeNode}>Удалить подзадачи</button>
        </div>
      {taskInfoVisibility && <TaskInfo name={props.name} description={props.description}/>}
      <div className="children">
        {children &&
          children.map((item, index) => {
            return <TreeNode key={index} index={index} name={item.name} description={item.description}/>;
          })
        }
      </div>
    </div>
  );
}

export default TreeNode;
