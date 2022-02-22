import {Display} from "./Display";

export class Chip8 {
    //where all instructions will live
    //also will have display and keyboard living 
    constructor() {
        console.log('Created a new Chip-8');
        this.display = new Display();
    }

}