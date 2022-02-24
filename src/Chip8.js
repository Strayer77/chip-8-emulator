import {Display} from "./Display";
import { Memory } from "./Memory";

export class Chip8 {
    //where all instructions will live
    //also will have display and keyboard living 
    constructor() {
        console.log('Created new Chip-8')
        this.display = new Display();

        // Normally would have a bus to connect memory hardware to chip-8
        // since this architecture is more simple we can connect memory directly 
        // to the chip 8 class:
        this.memory = new Memory();
    }

}