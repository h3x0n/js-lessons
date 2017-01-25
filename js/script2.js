var ship = new Ship($('#ship'));
var meteor = new Meteor($('#meteor1'));

function tick() {
  ship.animateMove();
  meteor.changeCoords();
  meteor.animateMove();
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
    ship.bang();
  }
}

// Движение на клавиши
$(document).keypress(function(event) {
  switch(event.charCode) {
    case 119: // w
      ship.moveUp();
      break;
    case 117: // s
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

// Настройки метеорита
function Meteor(jqEl) {
	var me = this;
	var settings = {
		step: 4,
		left: 50,
		top: 50
	}

	me.topStep = 0.5;
	me.leftStep = 0.5;
  // Изменение координат
	me.changeCoords = function () {
    me.newTop = me.newTop + me.topStep * me.step;
    me.newLeft = me.newLeft + me.leftStep * me.step;
  }
  Mover(me, jqEl, settings);
}
// Настройки корабля
function Ship(jqEl) {
	var me = this;
	var settings = {
		step: 10,
		left: 100,
		top: 100
	}
  // Изменение спрайтов
  me.moveBottom = function() {
    me.jqEl.css('background-position', '0px 0px');
    me.newTop += me.step;
  }
  me.moveLeft = function() {
    me.jqEl.css('background-position', '0px 198px');
    me.newLeft -= me.step;
  }
  me.moveUp = function() {
    me.jqEl.css('background-position', '0px 66px');
    me.newTop -= me.step;
  }
  me.moveRight = function() {
    me.jqEl.css('background-position', '0px 132px');
    me.newLeft += me.step;
  }
  me.bang = function(){
    me.jqEl.css('border', ' 4px solid #000');
  }
  Mover(me, jqEl, settings);
}

// Родительский класс
function Mover(me, jqEl, settings) {
	me.jqEl = jqEl;
	me.step = settings.step ? settings.step : 10;
	me.top = settings.top ? settings.top : 0;
	me.left = settings.left ? settings.left : 0;

	me.updateCoords = function() {
		me.top = parseInt(me.jqEl.css('top'));
		me.left = parseInt(me.jqEl.css('left'));
	}

	me.animateMove = function() {
		me.updateCoords();
		me.jqEl.stop(); // TODO: нужен ли stop() и т.д.
		me.jqEl.animate({
			top: me.newTop + 'px',
			left: me.newLeft + 'px',
		}, {queue: false});
	}

	me.updateCoords();
	me.newTop = me.top;
	me.newLeft = me.left;
}

// Запуск счетчика
setInterval(tick, 100);