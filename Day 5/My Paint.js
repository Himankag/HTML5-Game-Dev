var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pencil = document.getElementById("pencil");
var eraser = document.getElementById("eraser");
var brushSize = document.getElementById("brush-size");
var brushColor = document.getElementById("brush-color");
var clearBtn = document.getElementById("clear");
var undoBtn = document.getElementById("undo");
var saveBtn = document.getElementById("save");

var x, y;
var isDrawing = false;
var color = "#000000";
var width = 5;
var previousActions = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

pencil.addEventListener("click", function() {
  this.classList.add("selected");
  eraser.classList.remove("selected");
});

eraser.addEventListener("click", function() {
  this.classList.add("selected");
  pencil.classList.remove("selected");
});

brushSize.addEventListener("input", function() {
  width = this.value;
});

brushColor.addEventListener("input", function() {
  color = this.value;
});

clearBtn.addEventListener("click", function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

undoBtn.addEventListener("click", function() {
  if (previousActions.length > 0) {
    ctx.putImageData(previousActions[previousActions.length - 1], 0, 0);
    previousActions.pop();
  }
});

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
