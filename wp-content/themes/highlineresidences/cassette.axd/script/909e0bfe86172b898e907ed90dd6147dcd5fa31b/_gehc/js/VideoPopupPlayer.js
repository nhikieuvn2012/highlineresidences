(function(n,t){var i=n.gehc||{};i.PopupPlayer={wrapperId:"gehc-popup-player",overlayId:"gehc-popup-player-overlay",playerId:"gehc-popup-player-video",overlay:{},wrapper:{},content:{},close:{},init:function(){i.PopupPlayer.overlay=t("#"+i.PopupPlayer.overlayId),i.PopupPlayer.wrapper=t("#"+i.PopupPlayer.wrapperId),i.PopupPlayer.content=i.PopupPlayer.wrapper.find("div.content"),i.PopupPlayer.close=i.PopupPlayer.wrapper.find("a.close"),t(document).delegate("a.gehc-popup-player-launch","click",i.PopupPlayer.onPlayerLaunchClick),i.PopupPlayer.overlay.click(i.PopupPlayer.onOverlayClick),i.PopupPlayer.close.click(i.PopupPlayer.onOverlayClick)},onPlayerLaunchClick:function(n){n.preventDefault();var r=t(this),u=r.data("mp4url"),f=r.data("webmurl"),e=i.PopupPlayer.createVideoTag({sources:[{url:u,type:"video/mp4"},{url:f,type:"video/webm"}]});return!1},onOverlayClick:function(){return i.PopupPlayer.wrapper.hide(),i.PopupPlayer.overlay.hide(),i.PopupPlayer.unloadVideo(),!1},createVideoTag:function(n){var u=n.sources||[],f=t(document.createElement("video")),r,e;for(f.attr("id",i.PopupPlayer.playerId).attr("controls",!0).attr("width",640).attr("height",360).addClass("video-js").addClass("vjs-gehc-skin"),r=0;r<u.length;r++)e=t(document.createElement("source")),e.attr("src",u[r].url).attr("type",u[r].type),f.append(e);i.PopupPlayer.insertVideo(f)},insertVideo:function(n){i.PopupPlayer.content.html(n),_V_(i.PopupPlayer.playerId,{},function(){i.PopupPlayer.overlay.show(),i.PopupPlayer.wrapper.show()})},unloadVideo:function(){delete _V_.players[i.PopupPlayer.playerId],i.PopupPlayer.content.children().remove()}},t(i.PopupPlayer.init)})(this,jQuery)