class Star {
  constructor(canvasWidth,canvasHeight,ctx,opacity,size) {
    this.ctx = ctx;
    this.opacity = opacity;
    this.size = size;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.floor(Math.random() * canvasWidth);
    this.y = Math.floor(Math.random() * canvasHeight);
    this.opacityDiff = Math.random() * 0.03;
    this.opacityDirection = 1;
  }


  draw() {
    this.ctx.save();
  	if(this.opacity > 1) {
  		this.opacityDirection = -1;
  	}
  	else if (this.opacity <= 0) {
  		this.x = Math.floor(Math.random() * this.canvasWidth);
  		this.y = Math.floor(Math.random() * this.canvasHeight);
      this.opacityDirection = 1;
  	}

  	this.opacity += this.opacityDiff * this.opacityDirection;
  	this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.size, 0, 2 * Math.PI);
  	this.ctx.closePath();
  	this.ctx.fillStyle = `rgba(255, 255, 200,${this.opacity})`;
  	this.ctx.shadowBlur = 5;
  	this.ctx.shadowColor = '#fff';
  	this.ctx.fill();
  	this.ctx.restore();
  }
}

export default Star;
