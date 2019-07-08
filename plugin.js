videojs.getPlayer().on('play',function(evt,data){  
  window.parent.postMessage("working",  "https://localhost:5201"); 
});
