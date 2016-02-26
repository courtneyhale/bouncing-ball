/*
  BouncingBall

  The specs. A BouncingBall must:

  1. Be translucent.
  2. Have positions and directions represented by a p5.Vector object.
  3. Move in a random direction once initialize() is called, but each ball should move at the same speed.
  4. Bounce off the edges of the canvas.

  Most of your work in this assignment (in fact, almost certainly all of it) will involve modifying this starter code.

  You may create whatever additional properites and functions you may wish to help you accomplish the behavior above. Please recall that functions should generally be not longer than 5 lines of code.
*/

// the arguments to the constructor function should represent the BouncingBall's starting position
var BouncingBall = function (startingX, startingY) {
  this.x = startingX;
  this.y = startingY;
  this.radius = 15;
  this.position = createVector(startingX, startingY);

};

//var v1 = createVector(width / 2, height / 2);

BouncingBall.prototype = {

  // initialize() is typically only called once, after the object is created.
  initialize: function () {

  },

  // update() should update the state of the object, moving it and updating any properties
  update: function () {
    this.position.x += random();
    this.position.y += random();
    //if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
    //this.checkForBounce();
    //this.move();
  },

  move: function(directionX, directionY){
    this.direction = createVector(directionX, directionY);

  },

  // display() should draw the object to the canvas, using p5 code
  display: function () {
    noStroke();
    fill(255);
    ellipse(this.position.x,this.position.y,this.radius*2,this.radius*2)
    //ellipse(v1.x, v1.y, 30, 30);
  },

};
