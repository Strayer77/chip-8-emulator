import { BG_COLOR, COLOR, DISPLAY_HEIGHT, DISPLAY_MULTIPLIER, DISPLAY_WIDTH } from "./constants/displayConstants"

export class Display {
    constructor() {
        console.log('Created Display')
        this.screen = document.querySelector('canvas');
        this.screen.width = DISPLAY_WIDTH * DISPLAY_MULTIPLIER;
        this.screen.height = DISPLAY_HEIGHT * DISPLAY_MULTIPLIER;
        this.context = this.screen.getContext('2d');
        this.context.fillStyle = BG_COLOR;
        // frameBuffer - need to draw pixels on screen - store in buffer
        this.frameBuffer = [];
        this.reset();
        
    }
    // loop through screen buffer and set all pixels to 0
    // screenBuffer is an array of arrays - each array is a line 
    // straight across screen - so to reset we push an empty array for each line
    // and for each pixel in the line we set to zero
    reset() {
        for(let i=0; i < DISPLAY_HEIGHT; i++) {
            this.frameBuffer.push([]);
            for(let j=0; j < DISPLAY_WIDTH; j++) {
                this.frameBuffer[i].push(1)
            }
        }
        this.context.fillRect(0,0, this.screen.width, this.screen.height);
        this.drawBuffer();
    }

    // loops through screen lines and pixels and draws pixels on screen 
    // by grabbing x values (w for width) and y values (h for height) and setting them a color value
    drawBuffer() {
        for(let h=0; h < DISPLAY_HEIGHT; h++) {
            this.frameBuffer.push([]);
            for(let w=0; w <DISPLAY_WIDTH; w++) {
                this.drawPixel(h, w, this.frameBuffer[h][w]);
            }
        }
    }

    drawPixel(h, w, value) {
        // if value is 1 - draws 'COLOR' - pixel is on
        // else pixel is off and draws background color
        if (value) {
            this.context.fillStyle = COLOR
        } else {
            this.context.fillStyle = BG_COLOR
        }
        this.context.fillRect(
            w * DISPLAY_MULTIPLIER, 
            h*DISPLAY_MULTIPLIER,
            DISPLAY_MULTIPLIER, 
            DISPLAY_MULTIPLIER    
        );
    }
}