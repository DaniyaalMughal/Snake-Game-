const canvas = document.getElementById("black");
const btn = document.querySelector(".btn");
const Displayscore = document.querySelector("#score");
const ctx = canvas.getContext("2d");
const snakeW = 10;
const snakeH = 10;
let dir = "right";
let Score=0;

// Control Snake by keys left,right,up and down
document.addEventListener("keydown", control);
function control(e) {
  if (e.keyCode == 39 && dir!="left") {dir = "right"; } 
  else if (e.keyCode == 37 && dir!="right") {dir = "left";} 
  else if (e.keyCode == 40 && dir!="up") {dir = "down";} 
  else if (e.keyCode == 38 && dir!="down") {dir = "up";}
}

// Draw a Snake
function drawSnake(x, y) {
  ctx.fillStyle = "white";
  ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
  ctx.fillStyle = "black";
  ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH);
}

// Snake Length and Array
let len = 4;
let snake = [];
for(let i=0;i<len-1;i++){
    snake.push({
        x: i,
        y: 0,
      });

// Snake Move
let snakeX, snakeY;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    drawSnake(snake[i].x, snake[i].y);
  }
//   Food will draw on screen
  drawfood(food.x,food.y);

  snakeX = snake[0].x;
  snakeY = snake[0].y;

// Game over
  if(snakeX<0||snakeY<0||snakeX>=50||snakeY>=50){
    // alert("gameover")
    alert("gameover")
    clearInterval(2)
  }

  if (dir == "right") {
    snakeX++;
  } else if (dir == "left") {
    snakeX--;
  } else if (dir == "down") {
    snakeY++;
  } else if (dir == "up") {
    snakeY--;
  }

  
  
  if(snakeX==food.x&&snakeY==food.y){
      food={ 
        x:Math.floor(Math.random()*(canvas.width/snakeW)),
        y:Math.floor(Math.random()*(canvas.height/snakeH))
      }
      var newHead = {
        x: snakeX,
        y: snakeY
      }
      Score++;
      Displayscore.textContent=Score;

  }
  else{
    snake.pop();
    var newHead = {
        x: snakeX,
        y: snakeY
      }
  }
//   gameOver()

//   add new head in array
  snake.unshift(newHead);
}
// End Draw Function

// Create Food
var food={
    x:Math.floor(Math.random()*(canvas.width/snakeW)),
    y:Math.floor(Math.random()*(canvas.height/snakeH))
}
// function to display food in context
function drawfood(x,y){
    ctx.fillStyle="green";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}
}

// Game over if snake head touches wall
function gameOver(){
    for(let i=1;i<=snake.length;i++){
      if(snake[0].x==snake[i].x&&snake[0].y==snake[i].y){
        alert("game over")
      }
    }
}



btn.addEventListener('click',()=>{
  setInterval(draw,100)
})


