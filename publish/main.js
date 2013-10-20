/*jslint browser: true, devel: true, closure: true */
var gameModule = (function (document) {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores,
        scores1;

    function gameOver() {
        console.log("Your Final Scores: " + scores);
    }

    function startGame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

        ballX = Math.floor(Math.random() * 640); // 0..300
        ballY = Math.floor(Math.random() * 480);
        ballR = Math.floor(Math.random() * 80);

        canvas.width = 640;
        canvas.height = 480;

        ctx.fillStyle = '#C9A1EF';
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();


        if (counter >= 10) {
            gameOver();
        } else {
            setTimeout(startGame, 2000);
            counter = counter + 1;
        }
    }

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

        console.log("Clicked: " + x + " , " + y);

        if (tmp < ballR * ballR) {
            scores = scores + (100 - ballR);
            scores1 = (100 - ballR);
            console.log("Hit ! Your get scores: " + scores1);
            console.log("Your scores: " + scores);
        }
    }

    function start() {
        scores = 0;

        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }


    return {
        start: start
    };

}(document));

gameModule.start();