$(document).ready(function() {
    $("#myModal").modal('show');
});

var c = document.getElementById("lineone");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 150);
ctx.stroke();

var c = document.getElementById("linetwo");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(500, 300);
ctx.stroke();

var c = document.getElementById("linethree");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(500, 0);
ctx.stroke();

var c = document.getElementById("linefour");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 150);
ctx.stroke();

var c = document.getElementById("linefive");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 150);
ctx.stroke();