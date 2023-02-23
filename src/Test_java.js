// // Define canvas dimensions
// const canvasWidth = 400;
// const canvasHeight = 400;
//
// // Create canvas element
// const canvas = document.createElement('canvas');
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
// document.body.appendChild(canvas);
//
// // Get canvas context
// const ctx = canvas.getContext('2d');
//
// // Define player object
// const player = {
//     x: canvasWidth / 2,
//     y: canvasHeight / 2,
//     radius: 10,
//     color: 'blue'
// };
//
// // Define target object
// const target = {
//     x: Math.random() * canvasWidth,
//     y: Math.random() * canvasHeight,
//     radius: 10,
//     color: 'red'
// };
//
// // Draw player and target on canvas
// function draw() {
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     ctx.fillStyle = player.color;
//     ctx.beginPath();
//     ctx.arc(player.x, player.y, player.radius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillStyle = target.color;
//     ctx.beginPath();
//     ctx.arc(target.x, target.y, target.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
//
// // Move player based on arrow key input
// function movePlayer(event) {
//     switch(event.keyCode) {
//         case 37: // left arrow key
//             player.x -= 5;
//             break;
//         case 38: // up arrow key
//             player.y -= 5;
//             break;
//         case 39: // right arrow key
//             player.x += 5;
//             break;
//         case 40: // down arrow key
//             player.y += 5;
//             break;
//     }
//     // Check if player has collided with target
//     if (detectCollision(player, target)) {
//         target.x = Math.random() * canvasWidth;
//         target.y = Math.random() * canvasHeight;
//     }
// }
//
// // Detect collision between two circles
// function detectCollision(circle1, circle2) {
//     const distance = Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2));
//     return distance < circle1.radius + circle2.radius;
// }
//
// // Add event listener for arrow key input
// document.addEventListener('keydown', movePlayer);
//
// // Start game loop
// setInterval(draw, 10);







