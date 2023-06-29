import { makeAutoObservable } from "mobx";

class ChangeTheme{
    blackThemeActive = false;

    constructor() {
        makeAutoObservable(this);
    }

    ChangeTheme() {
        this.blackThemeActive = !this.blackThemeActive;
    };
}

export default new ChangeTheme();