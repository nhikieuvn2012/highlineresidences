(function(n){function t(t){var r;return t&&t.constructor==Array&&t.length==3?t:(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(r[1]),parseInt(r[2]),parseInt(r[3])]:(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55]:(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]:(r=/rgba\(0, 0, 0, 0\)/.exec(t))?i.transparent:i[n.trim(t).toLowerCase()]}function r(i,r){var u;do{if(u=n.curCSS(i,r),u!=""&&u!="transparent"||n.nodeName(i,"body"))break;r="backgroundColor"}while(i=i.parentNode);return t(u)}n.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(i,u){n.fx.step[u]=function(n){n.state==0&&(n.start=r(n.elem,u),n.end=t(n.end)),n.elem.style[u]="rgb("+[Math.max(Math.min(parseInt(n.pos*(n.end[0]-n.start[0])+n.start[0]),255),0),Math.max(Math.min(parseInt(n.pos*(n.end[1]-n.start[1])+n.start[1]),255),0),Math.max(Math.min(parseInt(n.pos*(n.end[2]-n.start[2])+n.start[2]),255),0)].join(",")+")"}});var i={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery)