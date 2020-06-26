// select the chart element
const chart = document.querySelector(".chart");

// create canvas element
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// append canvas to chart element
chart.appendChild(canvas);

// get context of canvas
const ctx = canvas.getContext("2d");

// change the line width
ctx.lineWidth = 7;

// circle radius
const R = 20;

// draw circle
function drawCircle(color, ratio, anticlockwise) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
  ctx.stroke();
}

// update chart
function updateChart(income, outcome) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  let ratio = income / (income + outcome);

  drawCircle("#FFF", 1 - ratio, true);
  drawCircle("#F0624D", 1 - ratio, false);
}
