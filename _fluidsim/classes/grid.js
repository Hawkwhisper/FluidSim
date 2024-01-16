const FluidNode = require('./node.js');

class FluidGrid {
    /**
     * @property {Object} node
     * Object instead of array, this allows us to instantly
     * access a node at a specified position by referencing
     * the key name instead of having to iterate through
     * until its found
     */
    node = {};

    constructor() {

    }

    /**
     * Sets the width/height of the tilemap used to represent currents
     * @param {*} width 
     * @param {*} height 
     */
    setGridSize(width, height) {
        this.node = {};
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const node = new FluidNode();
                this.node[`${x}x${y}`] = node;
            }
        }
    }

    update() {
        for(let node of Object.keys(this.node)) {
            
        }
    }
}

module.exports = FluidGrid;