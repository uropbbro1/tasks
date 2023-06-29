import { makeAutoObservable } from "mobx"

class ChangeAddTaskVisibility{
    addTaskVisibility = false;

    constructor(){
        makeAutoObservable(this);
    }

    addTaskVisibilityChange(){
        this.addTaskVisibility = !this.addTaskVisibility;
    }
}

export default new ChangeAddTaskVisibility();