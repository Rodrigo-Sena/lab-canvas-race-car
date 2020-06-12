window.onload = () => {

  const myGameArea = {
    canvas: document.getElementById('canvas'),
    context: this.canvas.getContext('2d'),
    drawRoad: function() {
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    const that = this
    roadImg.onload = function(){
      
      that        .context.drawImage(roadImg, 0,0, 500,700)
      }
   
    }
  }

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  myGameArea.drawRoad()

  function startGame() {
    console.log ('yo!')
    
  }


};
