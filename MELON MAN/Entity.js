class Entity {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	static bg(ctx, bgColor) {
		ctx.fillStyle = bgColor;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}

// background usage: Entity.bg(ctx, color);