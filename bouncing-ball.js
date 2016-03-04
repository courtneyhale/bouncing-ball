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
  this.position=new p5.Vector(startingX, startingY);
  this.direction=p5.Vector.random2D();
  this.direction.setMag(4);

};

//var v1 = createVector(width / 2, height / 2);

BouncingBall.prototype = {
  radius: 15,
  // initialize() is typically only called once, after the object is created.
  initialize: function () {

  },

  // update() should update the state of the object, moving it and updating any properties
  update: function () {
    this.position.add(this.direction);
    this.checkForBounce();
    //this.move();

  },

  checkForBounce: function () {
    if (this.position.x > width - this.radius / 2) this.bounceX();
    if (this.position.x < this.radius / 2) this.bounceX();
    if (this.position.y > height - this.radius / 2) this.bounceY();
    if (this.position.y < this.radius / 2) this.bounceY();

  },

  //bounce: function () {
    //this.bounceX();
    //this.bounceY();// your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
  //},

  bounceX: function() {
    this.direction.x *= -1
  },

  bounceY: function() {
    this.direction.y *=-1
  },


  //move: function () {
    //this.postion.x += this.speed.x; // this line is the same as: this.x = this.x + 1;
    //this.postion.y +=this.speed.y;
    //this.direction = new p5.Vector(random(-2,2),random(-2,2));
    //this.direction.setMag(2);

    //this.direction.rotate(random(0;Pi*2));

//  },

  // display() should draw the object to the canvas, using p5 code
  display: function () {
    noStroke();
    fill(255,35);
    ellipse(this.position.x,this.position.y,this.radius*2,this.radius*2)
    //ellipse(v1.x, v1.y, 30, 30);
  },

};
