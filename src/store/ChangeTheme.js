import { makeAutoObservable } from "mobx";

class ChangeTheme{
    blackThemeActive = false;
    constructor() {
        makeAutoObservable(this);
    }

    ChangeTheme() {
        this.blackThemeActive = !this.blackThemeActive;
    };

    GetTheme(){
        if(this.blackThemeActive){
            document.documentElement.style.setProperty('theme', '#000000');
        }else{
            document.documentElement.style.setProperty('theme', '#ffffff')
        }
        
    }
}

export default new ChangeTheme();