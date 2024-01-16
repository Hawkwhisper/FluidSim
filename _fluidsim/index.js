/**
 * Represents a fluid node with angle and power properties.
 * @class
 */
class FluidNode {
    /**
     * @type {number} - The angle of the fluid flow in radians.
     */
    angle = 0;

    /**
     * @type {number} - The power of the fluid flow.
     */
    power = 0;

    /**
     * Object representing the permanent flow properties. The angle and
     * power of the flow will eventually reset to this if left alone.
     * @type {{angle: number, power: number}}
     */
    permaflow = {
        angle: 0,
        power: 0
    }

    /**
     * @type {number} - How thick the water is.
     */
    viscosity = 0.001;

    /**
     * Creates a new FluidNode.
     * @constructor
     */
    constructor() {}

    /**
     * Sets the flow angle and power with damping.
     * @param {number} degrees - The angle in degrees.
     * @param {number} current - The power of the current.
     * @param {number} damp - The damping factor (between 0 and 1).
     */
    setFlow(degrees, current, damp) {
        /**
         * Update the angle with damping.
         * @type {number}
         */
        this.angle += (degrees * (Math.PI/180) - this.angle) * damp;

        /**
         * Update the power with damping.
         * @type {number}
         */
        this.power += (current - this.power) * damp;
    }

    /**
     * Updates the fluid node with permanent flow properties.
     */
    update() {
        this.setFlow(this.permaflow.angle, this.permaflow.power, 0.002);
    }
}

module.exports = FluidNode;