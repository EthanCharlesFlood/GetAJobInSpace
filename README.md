# Get a Job IN SPACE

  Do you want a job? How about a job in space? This endless runner utilizes jQuery, Canvas, HTML5, and JavaScript
  to create opportunities for you to avoid the pitfalls of the job hunt and if you are lucky enough get a job in space.

## Features & MVPs

[] Functioning game.

[] Infinite scrolling with player sprite moving with screen.

[] Ability of player character to navigate screen and avoid randomly seeded obstacles.

[] Scoring based on distance traveled with locally stored high score.

## WireFrames

![wireframe](https://github.com/EthanCharlesFlood/GetAJobInSpace/blob/master/assets/JavaScript%20Game%20Wireframe.png)

## Architecture & Technologies

The game is divided into several classes for clean implementation. I utilized an object superclass and inheritance to create
obstacle, enemy, and character classes representing the objects in the game.  There is a background class which renders the infinitely
scrolling starscape, and a score and highscore class which implement scoring and the high score functionality.

Objects are rendered onto the canvas via spritesheets, and hit detection between these objects is implemented via a bounding box algorithm.
Jquery is utilized by the high score class to check the current high score and allow the user to save their name to the illustrious list of
people who have jobs in space if they are diligent enough.

## Implementation

Day 1: Get the structure of the HTML page setup including the canvas element, get the Node modules including webpack up and running, begin implementing JavaScript class structures.

Day 2: Work on getting a functioning scrolling game board up and running and work on getting the objects functional, including collision detection if possible.

Day 3: Implement user controls for jumping and implement sprites/spritesheets to style the game.

## Bonuses

[] Implement background music and explosion sound effect on player leaving labor participation pool.

[] Implement high score and ability to save high score so that the best jobseekers are stored serverside.

[] Have destroyable obstacles and an attack to do so with.

[] Gradually increasing speed of game as time goes on.
