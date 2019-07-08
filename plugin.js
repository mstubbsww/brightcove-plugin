videojs.getPlayer("vjs_video_3").on("play",function(evt,data){  
  window.parent.postMessage("working",  "https://localhost:5201"); 
  alert("on play");
});
