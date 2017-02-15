var stage,
    ship,
    meteorCollection,
    KEYCODE_LEFT    = 65, 
    KEYCODE_RIGHT   = 68,
    KEYCODE_UP      = 87, 
    KEYCODE_DOWN    = 83,
    KEYCODE_SPACE   = 32;

document.onkeydown = function(event) {
    switch(event.keyCode) {
        case KEYCODE_LEFT:
            ship.moveLeft();
            break;
        case KEYCODE_RIGHT: 
            ship.moveRight();
            break;
        case KEYCODE_UP: 
            ship.moveUp();
            break;
        case KEYCODE_DOWN: 
            ship.moveBottom();
            break
        case KEYCODE_SPACE: 
            ship.shoot();
            break;
    }
}
function init() {
    var settings = {};
    stage = new createjs.Stage("game-canvas");
    ship = new Ship(stage, 367, 500);
    meteorCollection = [];

    setInterval(function() {
        settings = {
            x: Math.random() * (750 - 50) + 50,
            y: 20
        };
        meteorCollection.push(new Meteor(settings));
    },2000);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', handleTick);
}

function handleTick() {
    stage.update();
    if (meteorCollection[0]) {
        $.each(meteorCollection, function( index, meteor ) {
          meteor.symbol.y += 5;
        });
    }
}

setTimeout(function(){
    if (meteorCollection) {
        setInterval(function() {
            meteorCollection.shift();
            // TODO: destroy element
        }, 2000);
    }
}, 7000);