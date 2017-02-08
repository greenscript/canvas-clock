function Circle(ctx, positionX, positionY, radius, startAngle, endAngle, fillColor) {
  this.ctx = ctx;
  this.positionX = positionX;
  this.positionY = positionY;
  this.radius = radius;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
  this.fillColor = fillColor;
  this.update();
}

Circle.prototype.render = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.ctx, this.positionX, this.positionY, this.radius, this.startAngle, this.endAngle);
  this.ctx.fillStyle = this.fillColor;
  this.ctx.fill();
  this.ctx.closePath();
};

Circle.prototype.update = function(){
  this.render();
};

function Line(ctx, position, size, width, color) {

  this.ctx = ctx;
  this.position = position;
  this.size = size;
  this.width = width;
  this.color = color;
  this.update();
}

Line.prototype.render = function() {
  this.ctx.beginPath();
  this.ctx.lineWidth = this.width;
  this.ctx.lineCap = 'round';
  this.ctx.moveTo(0,0);
  this.ctx.rotate(this.position);
  this.ctx.lineTo(0, -this.size);
  this.ctx.strokeStyle = this.color;
  this.ctx.stroke();
  this.ctx.rotate(-this.position);
  this.ctx.closePath();

};

Line.prototype.update = function(position, size, width, color) {
  this.position = position;
  this.size = size;
  this.width = width;
  this.color = color;
  this.render();
};
