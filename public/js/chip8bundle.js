/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chip8": () => (/* binding */ Chip8)
/* harmony export */ });
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



class Chip8 {
    //where all instructions will live
    //also will have display and keyboard living 
    constructor() {
        console.log('Created new Chip-8')
        this.display = new _Display__WEBPACK_IMPORTED_MODULE_0__.Display();

        // Normally would have a bus to connect memory hardware to chip-8
        // since this architecture is more simple we can connect memory directly 
        // to the chip 8 class:
        this.memory = new _Memory__WEBPACK_IMPORTED_MODULE_1__.Memory();
    }

}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Display {
    constructor() {
        console.log('Created Display')
        this.screen = document.querySelector('canvas');
        this.screen.width = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER;
        this.screen.height = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER;
        this.context = this.screen.getContext('2d');
        this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR;
        // frameBuffer - need to draw pixels on screen - store in buffer
        this.frameBuffer = [];
        this.reset();
        
    }
    // loop through screen buffer and set all pixels to 0
    // screenBuffer is an array of arrays - each array is a line 
    // straight across screen - so to reset we push an empty array for each line
    // and for each pixel in the line we set to zero
    reset() {
        for(let i=0; i < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; i++) {
            this.frameBuffer.push([]);
            for(let j=0; j < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; j++) {
                this.frameBuffer[i].push(1)
            }
        }
        this.context.fillRect(0,0, this.screen.width, this.screen.height);
        this.drawBuffer();
    }

    // loops through screen lines and pixels and draws pixels on screen 
    // by grabbing x values (w for width) and y values (h for height) and setting them a color value
    drawBuffer() {
        for(let h=0; h < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; h++) {
            this.frameBuffer.push([]);
            for(let w=0; w <_constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; w++) {
                this.drawPixel(h, w, this.frameBuffer[h][w]);
            }
        }
    }

    drawPixel(h, w, value) {
        // if value is 1 - draws 'COLOR' - pixel is on
        // else pixel is off and draws background color
        if (value) {
            this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.COLOR
        } else {
            this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR
        }
        this.context.fillRect(
            w * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER, 
            h*_constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER,
            _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER, 
            _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER    
        );
    }
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DISPLAY_WIDTH": () => (/* binding */ DISPLAY_WIDTH),
/* harmony export */   "DISPLAY_HEIGHT": () => (/* binding */ DISPLAY_HEIGHT),
/* harmony export */   "DISPLAY_MULTIPLIER": () => (/* binding */ DISPLAY_MULTIPLIER),
/* harmony export */   "BG_COLOR": () => (/* binding */ BG_COLOR),
/* harmony export */   "COLOR": () => (/* binding */ COLOR)
/* harmony export */ });
const DISPLAY_WIDTH = 64;
const DISPLAY_HEIGHT = 22;
const DISPLAY_MULTIPLIER = 10;
const BG_COLOR = "#000";
const COLOR = "#3f6";

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Memory": () => (/* binding */ Memory)
/* harmony export */ });
/* harmony import */ var _constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


class Memory {
    constructor() {
        this.memory = new Uint8Array(_constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__.MEMORY_SIZE) //creates an array of bytes the size of our 'MEMORY_SIZE' constant
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
        console.assert(index >= 0 && index < _constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__.MEMORY_SIZE, `Error trying to access memory at index ${index}`);
    }
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEMORY_SIZE": () => (/* binding */ MEMORY_SIZE),
/* harmony export */   "LOAD_PROGRAM_ADDRESS": () => (/* binding */ LOAD_PROGRAM_ADDRESS)
/* harmony export */ });
const MEMORY_SIZE = 4095;
const LOAD_PROGRAM_ADDRESS = 0x200;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


//creating new instance of Chip8 class
const chip8 = new _Chip8__WEBPACK_IMPORTED_MODULE_0__.Chip8();
chip8.memory.setMemory(0x05, 0x1a);
const result = chip8.memory.getMemory(0x05)
console.log(result)
})();

/******/ })()
;