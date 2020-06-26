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
ctx.lineWidth = 8;

// circle radius
const R = 20;
