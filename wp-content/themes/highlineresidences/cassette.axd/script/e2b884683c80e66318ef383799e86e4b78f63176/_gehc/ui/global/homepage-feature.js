(function(n){var t={init:function(){var t=this;this.$container=n("#homepage-feature-group"),this.$slides=this.$container.find(".feature"),this.$controlsContainer=n("#homepage-feature-controls"),this.$controls=n("#homepage-feature-controls li"),this.activePos=0,this.hasClicked=!1,this.timeoutCounter=null,this.timeout=8e3,n(this.$controls[this.activePos]).addClass("home-feature-active"),this.$controlsContainer.delegate("li a","click",n.proxy(t.onNavClick,t)),this.$container.addSwipeEvents().bind("swipe",function(n,i){if(i.eventType=="swipeleft")t.next();else if(i.eventType=="swiperight")t.prev();else return!1}),this.cycle()},cycle:function(){this.$slides.length>1&&(this.timeoutCounter=setTimeout(n.proxy(this.next,this),this.timeout))},next:function(){var n=this.activePos<this.$slides.length-1?this.activePos+1:0;this.gotoSlide(n)},prev:function(){var n=this.activePos!=0?this.activePos-1:this.$slides.length-1;this.gotoSlide(n)},onNavClick:function(t){t.preventDefault();var i=n(t.target),r=parseInt(i.closest("li").index());this.gotoSlide(r)},pause:function(){clearTimeout(this.timeoutCounter)},unPause:function(){this.cycle()},gotoSlide:function(t){this.pause(),this.$container=n("#homepage-feature-group"),this.$slides=this.$container.find(".feature"),this.$controlsContainer=n("#homepage-feature-controls"),this.$controls=n("#homepage-feature-controls li");var i=this,r=this.$slides.eq(this.activePos),u=this.$slides.eq(t);r.fadeOut("slow"),u.fadeIn("slow",function(){n(i.$controls[i.activePos]).removeClass("home-feature-active"),n(i.$controls[t]).addClass("home-feature-active"),i.activePos=t}),this.unPause()}};n("#homepage-feature-group").length>0&&t.init()})(gehc_jQuery)