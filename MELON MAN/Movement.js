function movement() {
	this.move = function(){
		this.x += this.xSpeed
		if(this.xSpeed >= this.mX) {
			this.ac = 0
			this.xSpeed = this.mX
		}
		if(this.xSpeed <= -this.mX) {
			this.ac = 0
			this.xSpeed = -this.mX
		}
		if(this.acc = true){
			this.xSpeed += this.ac
		}
		if(this.lacc = true) {
			this.xSpeed -= this.ac
		}
	}
	this.jump = function() {
		this.y += this.ySpeed
		this.ySpeed += this.gravity
		if(this.ySpeed == 0) {
			this.mH = this.y - 100
		}
		if(this.y < this.mH) {
			this.jump = true
			this.gravity = 0.5
		}
	}
}
