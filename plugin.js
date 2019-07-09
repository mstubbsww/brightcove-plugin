window.onload = function(e) {
  videojs.getPlayer("vjs_video_3").ready(function() {
    this.on("play",function(e) {  
      window.parent.postMessage(this.mediainfo.id,  "*"); 
    });
  });
};
