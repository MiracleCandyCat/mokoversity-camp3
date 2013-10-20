var gameModule = (function() {

	var timeoutVar,
		counter = 0,
		ballX,
		ballY,
		ballR,
		scores;

	function touchEvent(evt) {
		var x = evt.clientX,
		      y=evt.clientY,
		    tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);
		  console.log("clicked: " + x + " , " + y);

		  if (tmp < ballR*ballR) {
		  	scores = scores + (100 - ballR);
		  	console.log("Hit ! Your scores: " + scores);
		  }
	}

	function start() {
			scores = 0;
			document.getElementById("main").addEventListener("click", touchEvent, false);
			startGame();
	}

	function startGame() {
		var canvas=document.getElementById("game");
		var	ctx=canvas.getContext("2d");
			ballX = Math.floor(Math.random() * 640); // 0..300
			ballY = Math.floor(Math.random() * 480);
			ballR = Math.floor(Math.random() * 80);

canvas.width = 640;
canvas.height = 480;

ctx.fillStyle = '#C9A1EF';
ctx.beginPath();
ctx.arc(ballX,ballY,ballR,0,2*Math.PI, true);
ctx.fill();


		if (counter >= 10) {

		} else {
			timeoutVar = setTimeout(startGame, 2000);
			counter = counter + 1;

			console.log("Counter: " + counter);
		}
}

		function gameOver() {
        console.log("Final: " + scores);
        }
return {
	start: start
 }
}) ();

gameModule.start();