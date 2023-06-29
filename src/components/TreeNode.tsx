import '../App.css'
import { useState } from 'react';
import TaskInfo from './TaskInfo';
import { observer } from 'mobx-react-lite'
import ChangeTheme from '../store/ChangeTheme';

interface TreeNodeProps{
    name: string;
    description: string;
    key?: number;
    index?: number;
}

const TreeNode:React.FC<TreeNodeProps> = 
  observer(({
    name,
    description,
    index
  }) => {
  const [child, setChild] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [taskDescription, setDescription] = useState('');
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false);
  const [checkboxesActive, setCheckboxesActive] = useState(false);

  const addNode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChild((children) => [...children, { name: input,  description: taskDescription, children: [] }]);
    setInput('');
    setDescription('');
  }

  const removeNode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(index){
      setChild(child.splice(index, index));
      console.log(child);
      return false;
    }else{
      setChild(child.splice(0, index));
      console.log(child);
      return false;
    }
  }

  const taskNameHandler = () => {
    let parent = document.getElementById('TreeItem');
    console.log(parent)
    let checkboxes = parent?.querySelectorAll('input');
    console.log(checkboxes)
    if(checkboxes){
        for(let checkbox of checkboxes){
            if(!checkboxesActive){
              checkbox.checked = true;
              setCheckboxesActive(!checkboxesActive);
              setTaskInfoVisibility(!taskInfoVisibility);
            }else{
              checkbox.checked = false;
              setCheckboxesActive(!checkboxesActive);
              setTaskInfoVisibility(!taskInfoVisibility);
            }
          }
    }else{
        throw new Error('there is no checkboxes');
    }    
  }
  console.log('array');
  console.log(child);
  return (
    <div className= {ChangeTheme.blackThemeActive ? 'TreeNode BlackTheme' : 'TreeNode'}>
        <div className='TreeItem' id='TreeItem'>
          <span><button className='btn' id='parent' type='button' onClick={taskNameHandler}>{name}</button></span>
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
              value={taskDescription}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Описание задачи'
            />
            <button className='btn btn-success' type="submit">Добавить подзадачу</button>
          </form>
          <button className='btn btn-danger' type="button" onClick={removeNode}>Удалить подзадачи</button>
        </div>
        {taskInfoVisibility && <TaskInfo name={name} description={description}/>}
      <div className="children">
        {child &&
          child.map((item, index) => {
            return(
              <div>
                <TreeNode index={index} name={item.name} description={item.description}/>;
              </div>
            );
          })
        }
      </div>
    </div>
  );
});

export default TreeNode;
