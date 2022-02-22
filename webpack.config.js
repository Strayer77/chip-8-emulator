const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        //exports a chip8bundle file to public/js directory
        filename: 'chip8bundle.js',
        path: path.resolve(__dirname, './public/js')
    },
    mode: "none",
}