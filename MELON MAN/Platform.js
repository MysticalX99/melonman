// dependencies: Entity.js

class Platform extends Entity {
	constructor(xSpeed, ySpeed, touchngo) {
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.on = touchngo ? false : null;
	}

	update() {
		if(this.on === null || this.on) {
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		}
	}
}