import { LOAD_PROGRAM_ADDRESS } from "./constants/memoryConstants";
import { NUMBER_OF_REGISTERS, STACK_DEPTH } from "./constants/registersConstants";

export class Registers{
    constructor() {
        // names of some of these variables are after what is laid out in the 
        // chip-8 handbook
        this.V = Uint8Array(NUMBER_OF_REGISTERS); // 16 general purpose 8-bit registers
        this.I = 0;
        this.delayTimer = 0;
        this.soundTimer = 0;
        this.PC = LOAD_PROGRAM_ADDRESS; // PC - program counter
        // Stack pointer points to stack - last in is the first out - is set to -1,
        // the last index
        this.SP = -1  // SP - Stack Pointer
        this.stack = Uint8Array(STACK_DEPTH);
        this.reset();
    }

    reset() {
        // reset to original values
        this.V.fill(0);
        this.I = 0;
        this.delayTimer = 0;
        this.soundTimer = 0;
        this.SP = -1
        this.stack = Uint8Array(STACK_DEPTH);
        this.stack.fill(0);
    }
}