/**************************


  Code For Mistify Footer


**************************/
window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, (1000 / 60));
		};
})();

var canvas, ctx, TWO_PI = (Math.PI * 2),
	velocityX = 14,
	velocityY = 14,
	particles = [],
	maxNodes = 4,
	hBounds = window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth,
	vBounds = window.innerHeight ||
	document.documentElement.clientHeight ||
	document.body.clientHeight,
	hue = Math.floor(minMax(0, 360));

function minMax(min, max) {
	return (Math.random() * (max - min)) + min;
}

function HSL(hue, saturation, lightness) {
	return ("hsl(" + hue + "," + saturation + "%," + lightness + "%)");
}

function Node(x, y) {
	this.x = x;
	this.y = y;

	this.vX = velocityX;
	this.vY = velocityY;

	this.angle = 0;
}

Node.prototype.move = function() {
	this.x += Math.cos(this.angle) * this.vX;
	this.y += Math.sin(this.angle) * this.vY;

	if (this.x <= 0 || this.x >= hBounds) {
		this.vX = -(this.vX + minMax(-1, 1));
	}
	if (this.y <= 0 || this.y >= vBounds) {
		this.vY = -(this.vY + minMax(-1, 1));
	}
};

function init() {
	canvas = document.getElementById("canvas");
	canvas.width = hBounds;
	canvas.height = vBounds;

	ctx = canvas.getContext("2d");
	var nodes = maxNodes;
	while (nodes--) {
		particles[nodes] = new Node(minMax(1, hBounds), minMax(1, vBounds));
		particles[nodes].angle = minMax(0, TWO_PI);
	}
	requestAnimationFrame(Frame);
}

function Frame() {
	ctx.globalCompositeOperation = "destination-out";
	ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
	ctx.fillRect(0, 0, hBounds, vBounds);
	ctx.globalCompositeOperation = "lighter";
	ctx.strokeStyle = HSL(Math.floor(hue), 50, 50);

	for (var i = 0; i < particles.length; i++) {
		var p1 = particles[i];
		var p2 = particles[((i + 1) % particles.length)];

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();

		p1.move();
	}

	hue = (hue < 360) ? (hue + 0.25) : 0;
	requestAnimationFrame(Frame);
}

document.addEventListener("DOMContentLoaded", init);
