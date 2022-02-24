import {MEMORY_SIZE} from './constants/memoryConstants'

export class Memory {
    constructor() {
        this.memory = new Uint8Array(MEMORY_SIZE) //creates an array of bytes the size of our 'MEMORY_SIZE' constant
        this.reset()
    }
    // another reset function - will fill memory with 0 values
    reset() {
        this.memory.fill(0);
    }

    setMemory(index, value) {
        this.assertMemory(index);
        this.memory[index] = value;
    }

    getMemory(index) {
        this.assertMemory(index);
        return this.memory[index];
    }

    assertMemory(index) {
        console.assert(index >= 0 && index < MEMORY_SIZE, `Error trying to access memory at index ${index}`);
    }
}