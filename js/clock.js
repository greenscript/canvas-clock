function drawClock (ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ecf0f1';
  ctx.fill();
  ctx.closePath();
  // let clock = Circle(ctx, 0, 0, radius, 0, Math.PI * 2, '#ecf0f1');
  // clock.update();
  ctx.lineWidth = 15;
  ctx.strokeStyle = '#27ae60';
  ctx.stroke();
  // ctx.beginPath();
  // ctx.arc(0, 0, radius * 0.1/2 , 0, Math.PI * 2);
  // ctx.fillStyle = '#2980b9';
  // ctx.fill();
  let background = Circle(ctx, 0, 0, radius * 0.1/2 , 0, Math.PI * 2, '#2980b9');
  background.update();
}

function drawHours(ctx) {
  let i = 1;
  let angle;
  ctx.font = 18 + 'px helvetica';

  while (i < 13 ) {
    angle = i * Math.PI / 6;
    ctx.rotate(angle);
    ctx.translate(0, -153);
    ctx.rotate(-angle);
    ctx.fillText(i.toString(), -5, 5);
    ctx.rotate(angle);
    ctx.translate(0, 155);
    ctx.rotate(-angle);
    i++;
  }
}

function drawTime(ctx, radius, seconds, minutes, hours){
  seconds = (seconds * Math.PI/30);
  minutes = (minutes * Math.PI/30) + (seconds * Math.PI / (30*60));
  hours = hours % 12;
  hours = (hours * Math.PI/6) + (minutes * Math.PI/(6*60)) + (seconds * Math.PI/(360*60));

  let secondsHand = Line(ctx, seconds, radius * 0.9, radius * 0.02, '#3498db');
  secondsHand.update();

  let minutesHand = Line(ctx, minutes, radius * 0.8, radius * 0.07, '#1abc9c');
  minutesHand.update();

  let hoursHand = Line(ctx, hours, radius * 0.5, radius * 0.07, '#f1c40f');
  hoursHand.update();
}

function init () {
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let radius = 180;
  let time = new Date();
  let seconds = time.getSeconds();
  let minutes  = time.getMinutes();
  let hours = time.getHours();
  document.body.appendChild(canvas);
  ctx.translate(600, 300);

  drawClock(ctx, radius);
  drawHours(ctx);
  drawTime(ctx, radius,  seconds, minutes, hours);
}

window.addEventListener('load', setInterval(init, 1000), false);
