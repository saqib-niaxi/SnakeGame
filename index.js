// Set up the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set up the game variables
let snake = [{x: 10, y: 10}];
let food = {x: 5, y: 5};
let direction = "right";
let score = 0;
let gameSpeed = 100;

// Set up the game loop
function gameLoop() {
  // Move the snake
  moveSnake();
  
  // Check for collisions
  checkCollisions();
  
  // Draw the game
  drawGame();
  
  // Set up the next game loop
  setTimeout(gameLoop, gameSpeed);
}

// Move the snake
function moveSnake() {
  // Add a new head to the snake
  let newHead = {x: snake[0].x, y: snake[0].y};
  
  switch(direction) {
    case "up":
      newHead.y--;
      break;
    case "down":
      newHead.y++;
      break;
    case "left":
      newHead.x--;
      break;
    case "right":
      newHead.x++;
      break;
  }
  
  snake.unshift(newHead);
  
  // Check if the snake ate the food
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score++;
    gameSpeed -= 2;
    generateFood();
  } else {
    snake.pop();
  }
}

// Check for collisions
function checkCollisions() {
  // Check if the snake collided with a wall
  if (snake[0].x < 0 || snake[0].x >= canvas.width / 10 || snake[0].y < 0 || snake[0].y >= canvas.height / 10) {
    gameOver();
  }
  
  // Check if the snake collided with itself
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      gameOver();
    }
  }
}

// Draw the game
function drawGame() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the snake
  ctx.fillStyle = "#fff";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * 10, snake[i].y * 10, 10, 10);
  }
  
  // Draw the food
  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
  
  // Draw the score
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

// Generate a new food
function generateFood() {
  food = {
    x: Math.floor(Math.random() * canvas.width / 10),
    y: Math.floor(Math.random() * canvas.height / 10)
  };
  
  // Check if the food spawned on the snake
  for (let i = 0; i < snake.length; i++) {
    if (food.x === snake[i].x && food.y === snake[i].y) {
      generateFood();
    }
  }
}

// Game over
function gameOver() {
  alert("Game over! Your score was " + score);
  location.reload();
}


document.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
    case 38: // up arrow
    if (direction !== "down") {
    direction = "up";
    }
    break;
    case 40: // down arrow
    if (direction !== "up") {
    direction = "down";
    }
    break;
    case 37: // left arrow
    if (direction !== "right") {
    direction = "left";
    }
    break;
    case 39: // right arrow
    if (direction !== "left") {
    direction = "right";
    }
    break;
    }
    });
    
    // Start the game loop
    gameLoop();
var leftButton = document.getElementById('left-button');
var rightButton = document.getElementById('right-button');
var upButton = document.getElementById('up-button');
var downButton = document.getElementById('down-button');

// Add event listeners for button clicks
leftButton.addEventListener('click', function() {
  // Move the snake left
});

rightButton.addEventListener('click', function() {
  // Move the snake right
});

upButton.addEventListener('click', function() {
  // Move the snake up
});

downButton.addEventListener('click', function() {
  // Move the snake down
});
