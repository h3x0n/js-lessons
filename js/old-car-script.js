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
  var _top, _left,
      _newTop, _newLeft,
      _step = 10,
      me = this;
  this.updateCoords = function() {
    _top = parseInt(this.jqEl.css('top'));
    _left = parseInt(this.jqEl.css('left'));
  }
  this.init = function() {
    me.updateCoords();
    _newTop = _top;
    _newLeft = _left;
  }
  this.animateMove = function() {
    me.updateCoords();
    me.jqEl.stop();
    me.jqEl.animate({
      top: _newTop + 'px',
      left: _newLeft + 'px',
    }, {queue: false});
  }
  this.moveBottom = function() {
  	this.jqEl.css('background-position', '0px 0px');
    _newTop += _step;
  }
  this.moveLeft = function() {
  	this.jqEl.css('background-position', '0px 198px');
    _newLeft -= _step;
  }
  this.moveUp = function() {
  	this.jqEl.css('background-position', '0px 66px');
    _newTop -= _step;
  }
  this.moveRight = function() {
  	this.jqEl.css('background-position', '0px 132px');
    _newLeft += _step;
  }
  this.init();
  return this;
}
var myCar = new Mover($('#car'));
setInterval(myCar.animateMove, 100);