var myGame = {
  config : {

      lives: 8,
      speed : 0.8,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'drawing.png',
          id : 'mainScreen'
        },
        {
          src: 'you_lose.png',
          id : 'loseScreen'
        },
        {
          src : 'you_win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : 'heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -30
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0.000
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/','My_Game.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
