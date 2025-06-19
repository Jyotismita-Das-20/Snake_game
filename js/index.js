//Game constant & variables
let direction = {x:0, y:0};
const foodSound = new Audio('snake_eat&walk.mp3');
const gameOverSound = new Audio('snake_game-over.mp3');
const moveSound = new Audio('snake_direction change.mp3');
const musicSound = new Audio('snake_background.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
  {x:13, y:15}
]








//Game Function
function main(ctime){
  window.requestAnimationFrame(main);
  console.log(ctime)
  if(ctime - lastPaintTime/1000 < 1/speed){
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function gameEngine(){
  // Part 1: Updating the snake array & food

  // Part 2: Display the snake & food
  

}










//Main logic starts here
window.requestAnimationFrame(main);