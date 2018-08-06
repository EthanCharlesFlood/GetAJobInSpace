# JavaScript-Project

## A Simple Endless Runner

  For my javascript project I intend to make a simple endless runnner. I intend to implement spritesheets/sprites to give the game an office theme of a hiring manager avoiding overeager job applicants/or a job applicant avoiding pitfalls.  General theme decided haven't zeroed in on specifics yet.

## Features & MVPs

[ ] Start and pause functioning game.

[ ] Infinite scrolling with player sprite moving with screen.

[ ] Jumping ability with semi-random seeded obstacles to avoid.

[ ] Scoring based on number of jumps or distance traveled

## WireFrames

![wireframe](/assets/JavaScript Game Wireframe.png)

## Architecture & Technologies

4 Main classes will govern the logic of the game. One will implement the menu system for the game.  There will be an object class that handles the creation of obstacles and the player sprite and hit detection among these things.  Will possibly use inheritance and a superclass because these two have separate concerns.  There will be a board class that will govern the board makeup and seeding of obstacles.  Finally there will be a game class which compiles all the classes into the playable game and causes the scrolling and handles player input.

I intend to implement sprites via spritesheets to my canvas drawings.

## Implementation

Day 1: Get the structure of the HTML page setup including the canvas element, get the Node modules including webpack up and running, begin implementing JavaScript class structures.

Day 2: Work on getting a functioning scrolling game board up and running and work on getting the objects functional, including collision detection if possible.

Day 3: Implement user controls for jumping and implement sprites/spritesheets to style the game.

## Bonuses

[ ] Have flying obstacles attack the player as well.

[ ] Have destroyable obstacles and an attack to do so with.

[ ] Gradually increasing speed of game as time goes on.
