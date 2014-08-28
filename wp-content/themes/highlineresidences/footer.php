    
<footer role="contentinfo" class="gehc-footer fullwidth_">
    

    <div class="pagewidth_">
    
        
<div class="gehc-footer-about">
    <h2><a href="en/about_us.html"><span id="footer_0_ctl00_TranslatorControl37">About Us</span></a></h2>
    <ul>
    
        <li><a href="en/about_us/contact_us.html">Contact Us</a></li>
    
        <li><a href="en/about_us/data_usage_and_privacy.html">Data Usage and Privacy</a></li>
    
        <li><a href="en/about_us/safe_harbor_privacy_policy.html">Safe Harbor</a></li>
    
        <li><a href="en/about_us/subscribe_to_smartmail.html">Subscribe to SmartMail</a></li>
    
        <li><a href="en/about_us/ge_healthcare_fact_sheet.html">GE Healthcare Fact Sheet</a></li>
    
        <li><a href="en/about_us/ge_healthcare_careers.html">GE Healthcare Careers</a></li>
    
    </ul>
</div>

        
        <div class="gehc-footer-social">
            <h2>Subscribe to SmartMail</h2>
<p><a href="en/about_us/subscribe_to_smartmail.html">Sign-up for information on topics of interest to you.</a></p>


            
<h2>Follow Us</h2>
<ul class="social-media">
    
    <li><a class="social-linkedin" href="http://www.linkedin.com/company/1016?trk=tyah"> <span id="footer_0_ctl02_TranslatorControl29">LinkedIn</span></a></li>
    <li><a class="social-twitter" href="http://twitter.com/#!/gehealthcare"> <span id="footer_0_ctl02_TranslatorControl30">Twitter</span></a></li>
</ul>
        </div>
        
        
<div class="gehc-footer-meta">
    <p><span id="footer_0_ctl03_TranslatorControl36">© 2014 General Electric Company</span></p>
    <ul>
    
        <li><a href="http://www.ge.com/">GE Corporate</a></li>
    
        <li><a href="_/media/Downloads/us/Product/Product-Categories/Nuclear-Medicine/GEHC%20FMI%2040849%20July%203%202013%20USFDA.pdf">July 2013 Product Safety Information for certain GE Nuclear Medicine Devices</a></li>
    
    </ul>
    <ul>
    
        <li><a href="http://www.ge.com/privacy.html">Privacy Policy</a></li>
    
        <li><a href="en/footer/terms_and_conditions.html">Terms and Conditions</a></li>
    
        <li><a href="http://www.ge.com/accessibility.html">Accessibility</a></li>
    
    </ul>
    <p style="clear:both;"><span id="footer_0_ctl03_TranslatorControl1">*Trademark of General Electric Company</span></p>
    <p><span id="footer_0_ctl03_TranslatorControl2">**All third party trademarks are the property of their respective owner.</span></p>
</div>

    </div>
    
</footer>




<div id="gehc-popup-player"><a class="close">Close</a><div class="content"></div></div>
<div id="gehc-popup-player-overlay"></div>


</form>

</div><!-- /#wrap, opened before gehc-header. -->



<script type="text/javascript">var __masterDomain = 'www3.gehealthcare.com'; var __currentSiteName = 'gehc'; </script>

<script type="text/javascript">

	//create jsonp call to the master domain mvc route to check cookie
	(function ($) {

		//validate up variables
		if (__masterDomain == '' || __currentSiteName == '') { return; }

		//create url to master domain mvc route
		var url = 'http://' + __masterDomain + '/Site/SiteCheck/' + __currentSiteName + '?callback=?';

		$.ajax({
			url: url,
			type: "GET",
			dataType: "jsonp",
			crossDomain: true,
			contentType: "application/json; charset=utf-8",
			success: function (data) {

//				alert(__currentSiteName);
//				alert(data.Result);

				//check result
				if (data.Result) {

					//hook button click for accepting site change notice
					$('#site-change-notice-continue-button').bind('click', function (obj) {

						//call master domain to set cookie for the site
						$.ajax({
							url: 'http://' + __masterDomain + '/Site/SiteConfirm/' + __currentSiteName + '?callback=?',
							type: "GET",
							dataType: "jsonp",
							crossDomain: true,
							contentType: "application/json; charset=utf-8",
							success: function (data) {

								//hide the modal dialog
								$.modal.close();
							}
						});
					});

					//need to show modal dialog
					$('#site-change-notice').modal({

						opacity: 75,
						escClose: false,
						overlayClose: false

					});
				}
			},
			error: function (xhr, text, error) {
				/* debug
				alert(xhr);
				alert(text);
				alert(error);
				*/
			}
		});

	} (jQuery));

</script>



<script type="text/javascript" >
    (function ($) {
        $('li.gehc-overflow-dropdown').bind('mouseover', function () {
            $(this).children('ul').css('display', 'block');
        });

        $('li.gehc-overflow-dropdown').bind('mouseout', function () {
            $(this).children('ul').css('display', 'none');
        });
    } (jQuery));
</script>
<script type="text/javascript" >
    window.searchHint = 'Enter search term(s)';

    (function ($) {

        $('.gehc-search-detailed-creator-view .submit-button').bind('click', function () {
            var height = vsa.getNaturalHeight($('.filterResults'), true);

            $('.filterResults').animate({
                'height': height
            }, 100);
        });

        // changed to only the header search button(s) as to not confict with the finders
        $('button.search-submit-button').bind('click', function () {

            var query = $("#gehc-search-site-input").val();
            var url = document.URL;
            if (query && query != window.searchHint) {
                window.location = "/search?q=" + query + "&u=" + url;
            }
            return false;
        });

    } (jQuery));

</script>



<script type="text/javascript" src="../s7.addthis.com/js/250/addthis_widget.js#pubid=jslinkster#async=1"></script>


    <script type="text/javascript">
        /*
        * Apply target="_blank" to all external links.
        */
        jQuery(function () {
            // Build regex to match the current domain.
            var internalRegex = new RegExp('^https{0,1}:\/\/' + location.host.replace('.', '\.'));
            var documentRegex = /\.(pdf|zip|doc|docx|xls|dwg)([\?#][\w\d%\.&=]{1,}){0,}$/i;

            function isNullHref(href) {
                return typeof href == 'undefined' || href == null || href == '';
            }

            function isRelativeNonPDF(href) {
                return (href.indexOf('index.html') == 0 || href.indexOf('#') == 0 || href.indexOf('~') == 0) && href.toLowerCase().indexOf('.pdf') == -1;
            }

            function isDocument(href) {
                if (isNullHref(href)) return false;
                var match = href.match(documentRegex);
                return match;
            }

            // Find all links and test them
            jQuery('a').each(function () {
                var self = jQuery(this);
                var href = self.attr('href');

                if (isDocument(href)) self.addClass('document-link');

                // If link is relative or this page, ignore it.
                if (isNullHref(href) || isRelativeNonPDF(href) || href.indexOf('javascript:') == 0) {
                    
                    return;

                    // If link does not match this domain and it does not already have a target, give it target="_blank"
                } else if ((!href.match(internalRegex) || href.toLowerCase().indexOf('.pdf') != -1) && !self.attr('target')) {
                    self.attr('target', '_blank');
                }
            });

            
                // Track documents downloaded with GA
                jQuery(document.body).delegate('a.document-link', 'click', function () {
                    var self = jQuery(this);
                    _gaq.push(['_trackPageview', self.attr('href')]);
                });
            
        });
    </script>

<!-- SiteCatalyst code version: H.24.
Copyright 1996-2011 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com -->
<!-- linked in omniture.js
<script type="text/javascript" src="http://INSERT-DOMAIN-AND-PATH-TO-CODE-HERE/s_code.js"></script>-->
<script type="text/javascript">//<![CDATA[
    /* You may give each page an identifying name, server, and channel on
    the next lines. */
    if (typeof(s) !== "undefined") {
        s.pageName = "/GEHC/Home"
        s.channel = "Home"
        s.prop1 = "Home"
        s.prop6 = "GE Healthcare - USA"
        s.prop7 = "en"
        s.prop8 = "Americas"

        if (errorPageUrl != "") {
            s.prop2 = errorPageUrl;
        }

        
        


        /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
        s.t()
    }
//]]></script>
<!-- End SiteCatalyst code version: H.24. -->
<script src="../munchkin.marketo.net/munchkin.js" type="text/javascript"></script> 
<script>
    mktoMunchkin("406-TVZ-560");
</script>

<script type="text/javascript">
document.write(unescape("%3Cscript src='" + document.location.protocol +
 "//munchkin.marketo.net/munchkin.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script>Munchkin.init('005-SHS-767', {wsInfo: 'j1RQ'});</script>



<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/8e9dea8c17e15b8f4b6ba71fd2ec37e26ac79c2a/_gehc/js/util/plugins.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/0219c2cbf21eb6b7810f00ee54019892c4faa47e/_gehc/js/util/jquery.color.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/5b7c1f9d5465035f8485d4f5b1dc4ebadbb78ac1/_gehc/js/lib/jquery.doubletap.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/9c4605fbe1c44c12791e498ed307840c15da702a/_gehc/js/lib/swfobject.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/15b352dbc0ab95b6a3d7de2a0e2411d6fc68559d/_gehc/js/libs.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/4fa70ed0e95f870eed0016cd34b2b6668887bfd8/_gehc/js/vsa.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/537d22c053ed8628843b89ac30a6ed56547f9c50/_gehc/js/gehc.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/2f7eaa0d7cf38f3f916ee4c00f1e29350a310eb0/_gehc/ui/search/js/model.search.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/d27830fd9f402a9112cddc413afb745582515884/_gehc/ui/search/js/view.search.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/409ce3c108a2cee807bc2cae1e3004b1ccb8cb71/_gehc/ui/search/js/collection.search.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/9e4ed29919f566a297956bdece914911392d598f/_gehc/ui/search/js/util.search.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/73dbdbb03a4d66a6d8539f0a5efe57b2f86c8cde/_gehc/ui/search-site/js/util.search-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/3b2010928a70237c68f554e0e855ee4520f184dc/_gehc/ui/search-site/js/search-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/31229464e6574fa4d3333417644878e6cc036bcb/_gehc/ui/search-site/js/view.search-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/a35075904256ab75a8bbf93c3b234b8cff1bf316/_gehc/ui/search-site/js/tmpl.search-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/6e4e75c62f1dd5b4c965bf7ee09853f79c7c8610/_gehc/ui/navigation/js/navigation.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/3767193601c19f8f68da82202c8afc003f5cb768/_gehc/ui/navigation/js/view.navigation.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/0903aaffc29efe7b601f5127c466fb0ebea50821/_gehc/ui/breadcrumb/js/breadcrumb.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/8e14fc91f5caa0d3a780eb1cf80af26d1a6957df/_gehc/ui/breadcrumb/js/view.breadcrumb.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/d73c4ed9922f9fdeb44be1b1c670b5052fe58161/_gehc/ui/tools-page/js/tools-page.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/25e75cda742da275a0e38f9bd36fbc4e9022fbbc/_gehc/ui/tools-page/js/view.tools-page.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/248fcd6be74ef7f7cccc571aee110d9e0096a402/_gehc/ui/tools-site/js/tools-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/237d306d2c5b6b67e55e3a47a8e8a140933a0d8b/_gehc/ui/tools-site/js/view.tools-site.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/9eb8b6babe372a15cc69e16657903e83f216e6c4/_gehc/ui/tabs/js/util.tabs.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/0ee608dd0dfff919c86d46f5ef3c551c928439cc/_gehc/ui/tabs/js/tmpl.tabs.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/6ca7279bf1dda67aa3f87b5eaac6f6df040807ff/_gehc/ui/tabs/js/view.tabs.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/5611c14fb2dac714acfa83d8f6fe22f54a8e5ab8/_gehc/ui/tabsProduct/js/tabsProduct.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/f69ebb86aa4dde4e3964617d815911d7d0d365d6/_gehc/ui/tabsProduct/js/view.tabsProduct.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/1a0bc04ba60c82351d5fc8788bdf3df824556b6b/_gehc/ui/paginator/js/view.paginator.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/5d9503ab77db23a0eebaea5204aa216c07134e2b/_gehc/ui/paginator/js/collection.paginator.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/0504cf388fbb8de0869e7a479415b2ac3f5d257d/_gehc/ui/paginator/js/tmpl.paginator.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/d21d2db589d2f0a34af6d3bc6aa43291d5181788/_gehc/ui/paginator/js/util.paginator.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/d4a0a3867461b3d883b2adf70d720e2666ab73bb/_gehc/ui/paginator/js/model.paginator.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/a4a4c205b9aa615faffcd1b65e134a29a723abfe/_gehc/ui/forms/js/forms.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/636cf1d38c15cb13cc8fde33138ab9952159ae4a/_gehc/modules/search-detailed/js/util.search-detailed.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/486833a6d08122806211e0aa30575ba950063a12/_gehc/modules/search-detailed/js/tmpl.search-detailed.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/909e0bfe86172b898e907ed90dd6147dcd5fa31b/_gehc/js/VideoPopupPlayer.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/da45135fbe476fcb489065a731f6aa8d6479c213/_gehc/js/MobileNavigation.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/ff83ddd97bad183f233d068e987b40e4769b9f68/_gehc/ui/cookies/js/jquery.simplemodal.min.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/e2b884683c80e66318ef383799e86e4b78f63176/_gehc/ui/global/homepage-feature.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/451e3390ecf59ed6e67502b458fefe4f7fbf94fa/_gehc/js/router.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/c30d38b32d3c26a59d1e6640893824d44eaa6de2/_gehc/js/CurrentEvents.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/f63f59ec6f9aa75a41004b0d3e61ff8e66e3f4d6/_gehc/ui/global/media-gallery.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/9777db8e7f357a7239fe6b7b4d36ede327d958c5/_gehc/video-js/video.js" type="text/javascript"></script>
<script type='text/javascript'>   
    jQuery(document).ready(function () {
        // start video.js
        _V_.options.flash.swf = '_gehc/video-js/video-js.swf';
        _V_.autoSetup(); 
    });
</script> 
<script type='text/javascript'>   
    jQuery(document).ready(function () {
        // start addthis
        addthis.init();
    });
</script> 
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/37231f2e12589c33160d20f9013100ae0a01b5bf/_gehc/ui/global/static-paginator.js" type="text/javascript"></script>
<script type='text/javascript'> staticPaginator('.downloads', '.items-downloads');  staticPaginator('.gehc-stories-container', '.stories');  staticPaginator('.gehc-events-container', '.events');  staticPaginator('.media-gallery', '.thumbnails');  mediaGallery('.hero');  </script>
<script type='text/javascript'>   pubsub.subscribe('sendQuickSearchData', function (terms) {    if(s_gi) {       var s = s_gi(s_account);        s.events = s.apl(s.events, 'event2', ',', 2);        s.prop4 = terms;        s.tl(true, 'o', 'Quick Search');    }});  </script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/aa925aa3bb2b8698f5c6a510560e0c4424554008/_gehc/js/util/jquery.string.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/cassette.axd/script/233eccb011911cd49ea0f5f06312d0aaddf7c243/_gehc/js/jQuery.cookie.js" type="text/javascript"></script>
<script>  // to set cookies. Uses noConflict just in case  var $jQ = jQuery.noConflict();   // grab the URL parameter (repeat for additional parameters)  var paramvalue = $jQ.getQueryString({ ID: 'CampaignID' });   // set the cookies via jquery. expire time is in days (repeat for additional cookies)  $jQ.cookie('CampaignID', paramvalue, { expires: 1, domain: '.gehealthcare.com', path: '/' });  </script> 
<script type='text/javascript'>  jQuery(document).ready(function ($) {       gehc.util.responsive.init();  });    </script> 
</body>
</html>