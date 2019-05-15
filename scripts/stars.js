class Star {
  constructor(canvasWidth,canvasHeight,ctx,opacity,size) {
    this.ctx = ctx;
    this.opacity = opacity;
    this.size = size;
    this.x = Math.floor(Math.random() * canvasWidth);
    this.y = Math.floor(Math.random() * canvasHeight);
    this.opacityDiff = Math.random() * 0.03;
    this.opacityDirection = 1;
  }


  draw() {
  	this.ctx.rotate((Math.PI * 1 / 10));
  	this.ctx.save();
  	if(this.opacity > 1) {
  		this.opacityDirection = -1;
  	}
  	else if (this.opacity <= 0) {
  		this.x = Math.floor(Math.random() * this.canvasWidth);
  		this.y = Math.floor(Math.random() * this.canvasHeight);
      this.opacityDirection = 1;
  	}

  	this.opacity += this.increment * this.opacityDirection;
  	this.ctx.beginPath();
  	for (var i = 5; i--;) {
  		this.ctx.lineTo(0, this.size);
  		this.ctx.translate(0, this.size);
  		this.ctx.rotate((Math.PI * 2 / 10));
  		this.ctx.lineTo(0, - this.size);
  		this.ctx.translate(0, - this.size);
  		this.ctx.rotate(-(Math.PI * 6 / 10));
  	}
  	this.ctx.lineTo(0, this.size);
  	this.ctx.closePath();
  	this.ctx.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
  	this.ctx.shadowBlur = 5;
  	this.ctx.shadowColor = '#fff';
  	this.ctx.fill();
  	this.ctx.restore();
  }
}

export default Star;
