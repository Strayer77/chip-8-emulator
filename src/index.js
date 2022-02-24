import { Chip8 } from "./Chip8";

//creating new instance of Chip8 class
const chip8 = new Chip8();
chip8.memory.setMemory(0x05, 0x1a);
const result = chip8.memory.getMemory(0x05)
console.log(result)