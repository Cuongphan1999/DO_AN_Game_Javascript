let boxSize = 30;
let row = 25; 
let col = 25; 
let ctx;
let snakeX = boxSize ;
let snakeY = boxSize ;
let VelocityX = 0;  
let VelocityY = 0;  
let snakeBody = [];
let foodX;
let foodY;
let speed = 5;
 
 
window.onload = function () {
    let canvas = document.getElementById("GameScreen");
    canvas.height = row * boxSize;
    canvas.width = col * boxSize;
     ctx = canvas.getContext("2d");
    changePosition();
    document.addEventListener("keydown", changeDirection);
    setInterval(main, 1000 / speed);
}
 
function main() {
    let gameOver = false;
    if (gameOver) {
        return;
    }
 
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, GameScreen.width, GameScreen.height);
 
  
    ctx.fillStyle = "pink";
    ctx.fillRect(foodX, foodY, boxSize, boxSize);
 
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        console.log(snakeBody)//1
        changePosition();
    }
 
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
 
    ctx.fillStyle = "red";
    snakeX += VelocityX * boxSize ; 
    snakeY += VelocityY * boxSize;  
    ctx.fillRect(snakeX, snakeY, boxSize, boxSize);
    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], boxSize, boxSize);//2
    }
 
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}
function changePosition() {
  
     foodX = Math.floor(Math.random() * 15) * boxSize;
     foodY = Math.floor(Math.random() * 15) * boxSize;
}

function changeDirection(e) {
    switch (e.key) {
        case "ArrowUp":
            //console.log("ArrowUp");
            VelocityX = 0;
            VelocityY = -1;
            break;

        case "ArrowDown":
            //console.log("ArrowDown");
            VelocityX = 0;
            VelocityY = 1;
            break;

        case "ArrowLeft":
            //console.log("ArrowLeft");
            VelocityX = -1;
            VelocityY = 0;
            break;

        case "ArrowRight":
            //console.log("ArrowRight");
            VelocityX = 1;
            VelocityY = 0;
            break;
        default:
            break;
    }
}
 

