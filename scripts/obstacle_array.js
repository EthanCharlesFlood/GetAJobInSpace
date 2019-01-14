class ObastacleArray {
  constructor(obstacles) {
    this.obstacles = obstacles;
  }

  hitbox() {
    
  }

  reset() {

  }

  draw() {
    this.obstacles.forEach(obstacle => obstacle.draw);
  }

}
