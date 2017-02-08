function drawClock (ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ecf0f1';
  ctx.fill();
  ctx.closePath();
  // let clock = new Circle(ctx, 0, 0, radius, 0, Math.PI * 2, '#ecf0f1');
  // clock.update();
  ctx.lineWidth = 15;
  ctx.strokeStyle = '#27ae60';
  ctx.stroke();
  let background = new Circle(ctx, 0, 0, radius * 0.1/2 , 0, Math.PI * 2, '#2980b9');
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

function init () {
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  let radius = 180;
  let secondsHand = new Line(ctx);
  let minutesHand = new Line(ctx);
  let hoursHand = new Line(ctx);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.translate(canvas.width / 2, canvas.height / 2);

  function drawTime(radius, seconds, minutes, hours) {
    secondsHand.update((seconds * Math.PI/30), radius * 0.9, radius * 0.02, '#3498db');
    minutesHand.update((minutes * Math.PI/30) + (seconds * Math.PI / (30*60)), radius * 0.8, radius * 0.07, '#1abc9c');
    hoursHand.update((hours % 12 * Math.PI/6) + (minutes * Math.PI/(6*60)) + (seconds * Math.PI/(360*60)), radius * 0.5, radius * 0.07, '#f1c40f');
  }

  function animate () {
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes  = time.getMinutes();
    let hours = time.getHours();
    drawClock(ctx, radius);
    drawHours(ctx);
    drawTime(radius,  seconds, minutes, hours);
    requestAnimationFrame(animate);
  }
  document.body.appendChild(canvas);
  requestAnimationFrame(animate);
}

init();
