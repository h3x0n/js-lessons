var ship = new Mover($('#ship'));
$('#meteor1')
  .css('left', Math.random() * (300 - 20) + 20 + 'px')
  .css('top', Math.random() * (200 - 30) + 30 + 'px')
  .show();
function tick() {
  ship.animateMove();
  var minDistination = 33;
  // проверка, что координаты не близки
  var leftCoordShip = parseInt($('#ship').css('left')) + parseInt($('#ship').css('width'))/2;
  var topCoordShip = parseInt($('#ship').css('top')) + parseInt($('#ship').css('height'))/2;
   var leftCoordMeteor = parseInt($('#meteor1').css('left')) + parseInt($('#meteor1').css('width'))/2;
  var topCoordMeteor = parseInt($('#meteor1').css('top')) + parseInt($('#ship').css('height'))/2;
  var realDistination = Math.sqrt(
     Math.pow(leftCoordShip - leftCoordMeteor, 2) +
     Math.pow(topCoordShip - topCoordMeteor, 2)
  );
  if (realDistination < minDistination) {
    bang();
  }
}
$(document).keypress(function(event) {
  switch(event.charCode) {
    case 119: // w
      ship.moveUp();
      break;
    case 115: // s
      ship.moveBottom();
      break;
    case 97: // a
      ship.moveLeft();
      break;
    case 100: // d
      ship.moveRight();
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
function bang () {
  alert('bang!!!');
  console.log('bang');
}
setInterval(tick, 100);