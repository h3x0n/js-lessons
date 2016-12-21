var myCar = new Mover($('#car'));
$(document).keypress(function(event) {
  switch(event.charCode) {
    case 119: // w
      myCar.moveUp();
      break;
    case 115: // s
      myCar.moveBottom();
      break;
    case 97: // a
      myCar.moveLeft();
      break;
    case 100: // d
      myCar.moveRight();
      break;
	}
});
function Mover (jqEl) {
  this.jqEl = jqEl;
  this.moveBottom = function() {
  	this.jqEl.css('background-position', '0px 0px');
  	var top = parseInt(this.jqEl.css('top'));
    this.jqEl.stop().animate({
    	top: top + 66 + 'px'
    });
  }
  this.moveLeft = function() {
  	this.jqEl.css('background-position', '0px 198px');
  	var left = parseInt(this.jqEl.css('left'));
    this.jqEl.stop().animate({
    	left: left - 66 + 'px'
    })
  }
  this.moveUp = function() {
  	this.jqEl.css('background-position', '0px 66px');
  	var up = parseInt(this.jqEl.css('top'));
    this.jqEl.stop().animate({
    	top: up - 66 + 'px' 
    })
  }
  this.moveRight = function() {
  	this.jqEl.css('background-position', '0px 132px');
  	var left = parseInt(this.jqEl.css('left'));
    this.jqEl.stop().animate({
    	left: left + 66 + 'px'
    })
  }
  return this;
}