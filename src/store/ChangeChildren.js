import { makeAutoObservable } from "mobx";
/* Хотел использовать данный класс для изменения состояния дочернего элемента
Но при рекурсивной отрисовке похоже попал в бескочный рендеринг, поэтому этот класс не используется в приложении */
class ChangeChildren {
    children = [];

    constructor(){
        makeAutoObservable(this);
    }

    addNode(children ,name, description){
        this.children = [...children, {name: name, description: description, children:[]}]
    }

    removeNode(children, index){
        if(index){
            this.children = children.splice(index, index);
        }else{
            this.children = children.splice(0, index);
        }        
    }
}

export default new ChangeChildren();