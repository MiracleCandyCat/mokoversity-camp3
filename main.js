var gameModule = (function() {

	var timeoutVar,
		counter = 0

	function start() {
		var canvas=document.getElementById("game");
		var ctx=canvas.getContext("2d");
		var ballX = Math.floor(Math.random() * 300); // 0..300
		var ballY = Math.floor(Math.random() * 500);
		var ballR = Math.floor(Math.random() * 100);

canvas.width = 640;
canvas.height = 480;

ctx.fillStyle = '#C9A1EF';
ctx.beginPath();
ctx.arc(ballX,ballY,ballR,0,2*Math.PI, true);
ctx.fill();


		if (counter >= 10) {

		} else {
			timeoutVar = setTimeout(start, 1000);
			counter = counter + 1;

			console.log("Counter: " + counter);
		}
}

		function gameOver() {
        console.log("Counter: " + counter);
        }
return {
	start: start
 }
}) ();

gameModule.start();