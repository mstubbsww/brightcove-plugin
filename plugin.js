videojs.getAllPlayers()[0].ready(function() { 
  var myPlayer = this;
  myPlayer.on('play',function(evt,data){
    window.parent.postMessage("working",  "https://localhost:5201"); 
  });
});
