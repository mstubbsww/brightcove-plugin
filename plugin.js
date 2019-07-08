window.onload = function(e) {
  videojs.getPlayer("vjs_video_3").ready(function() {
    this.on("play",function(evt,data) {  
      window.parent.postMessage("working",  "https://localhost:5201"); 
    });
  });
};
