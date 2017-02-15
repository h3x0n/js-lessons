// Настройки корабля
function Ship(stage, x, y) {
    var me = this;
    var step = 5;
    var data = new createjs.SpriteSheet({
      "images": ["images/car-sprite.png"],
      "frames": {"count": 4, "width": 66, "height": 66},
      "animations": {
        left:   [1],
        right:  [2],
        top:    [3],
        bottom: [0]
      }
      // "images": ["images/ship.png"],
      // "frames": {"count": 4, "width": 96, "height": 96},
      // "animations": {
      //   left:   [1],
      //   right:  [3],
      //   top:    [0],
      //   bottom: [2]
      // }
    });
    me.symbol = new createjs.Sprite(data,'top');
    me.moveLeft = function() {
        me.symbol.gotoAndStop('left');
        me.symbol.x -= step;
    }
    me.moveRight = function() {
        me.symbol.gotoAndStop('right');
        me.symbol.x += step;
    }
    me.moveUp = function() {
        me.symbol.gotoAndStop('top');
        me.symbol.y -= step;
    }
    me.moveBottom = function() {
        me.symbol.gotoAndStop('bottom');
        me.symbol.y += step;
    }
    me.shoot = function() {
        console.log('shot');
    }

    me.symbol.x = x;
    me.symbol.y = y;

    stage.addChild(me.symbol);
}

function Meteor(settings) {
    var me = this;
    me.symbol = new createjs.Bitmap('images/meteor.png');
    
    me.symbol.x = settings.x;
    me.symbol.y = settings.y;

    stage.addChild(me.symbol);
}