const fUtil = require("../misc/file");
const stuff = require("./info");
const http = require("http");

function toAttrString(table) {
	return typeof table == "object"
		? Object.keys(table)
				.filter((key) => table[key] !== null)
				.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`)
				.join("&")
		: table.replace(/"/g, '\\"');
}
function toParamString(table) {
	return Object.keys(table)
		.map((key) => `<param name="${key}" value="${toAttrString(table[key])}">`)
		.join(" ");
}
function toObjectString(attrs, params) {
	return `<object ${Object.keys(attrs)
		.map((key) => `${key}="${attrs[key].replace(/"/g, '\\"')}"`)
		.join(" ")}>${toParamString(params)}</object>`;
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET") return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
		case "/charactercreator/new_char/": {
			title = "Character Creator";
			attrs = {
				data: process.env.SWF_URL + "/cc.swf", // data: 'cc.swf',
				type: "application/x-shockwave-flash",
				id: "char_creator",
				width: "100%",
				height: "100%",
				
			};
			params = {
				flashvars: {
					apiserver: "/",
					m_mode: "school",
					bs: "adam",
					isLogin: "Y",
					isEmbed: "0",
					ctc: "go",
					tlang: "en_US",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					appCode: "go",
					page: "",
					siteId: "go",
					userId: "00EDZP3Cu0aw",
					themeId: "family",
					ut: 30},
				
				allowScriptAccess: "always",
				movie: process.env.SWF_URL + "/cc.swf", // 'http://localhost/cc.swf'
			};
			break;
		}

		case "/charactercreator/": {
			title = "CC Browser";
			attrs = {
				data: process.env.SWF_URL + "/cc_browser.swf", // data: 'cc_browser.swf',
				type: "application/x-shockwave-flash",
				id: "ccbrowser",
				width: "100%",
				height: "100%",
			};
			params = {
				flashvars: {
					apiserver: "/",
					isEmbed: "0",
					ctc: "go",
					tlang: "en_US",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					appCode: "go",
					siteId: "school",
					st: "",
					userId: "0DyHqK6Yj9dM",
					ut: 23,
					uisa: 0,
					themeId: "family",
					u_info_school: "OjI6c2xoVVM3MWJIX05DMnA4cmRBQ2dFd3JvNE5xc2JEc2o4UFB2X1dVd2Eya2RPQisxVTl4d3ZHZHJPYnI4QURFNENWMjNkYm12WFdlUGxLT0g0OG4rekF5ajZhWGRGVTlocmJ4S1JhSWhCVXJlTF9BbXdyQUp3PQ=="},
				
				allowScriptAccess: "always",
				movie: process.env.SWF_URL + "/cc_browser.swf", // 'http://localhost/cc_browser.swf'
			};
			break;
		}

		case "/go/savedMovie/": {
			title = "View Or Record Your Movie - Vyond";
			attrs = {
				data: process.env.SWF_URL + "/player.swf",
				type: "application/x-shockwave-flash",
                                
				id: "Player",
                                width: "100%",
                                height: "100%",

                                align: "middle",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                wmode: "transparent",

                                hasVersion: "10.3",
				quality: "medium"
			};
			params = {
				flashvars: {
					movieOwner: "African+Vulture%E2%84%A2",
					movieOwnerId: "0uWOI2JiCdHU",
					movieId: "",
					movieLid: "0",
					movieTitle: "Test",
					movieDesc: "This+video+is+ment+for+testing+out+this+video+player.",
					userId: "",
					username:"", 
					uemail: "",
					ut: "-1",
					numContact: "",
					apiserver: "/",
					duration: "92",
					playcount: "0",
					thumbnailURL: "https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/1963/7876963/20609517L.jpg",
					copyable: "0",
					isPublished: "0",
					ctc: "go",
					tlang: "en_US",
					is_private_shared: "1",
					autostart: "0",
					appCode: "go",
					is_slideshow: "0",
					originalId: "0zEt_fo4L-5k",
					is_emessage: "0",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					animationPath: process.env.SWF_URL + "/",
					isEmbed: "0",
					refuser: null,
					utm_source: null,
					uid: null,
					isTemplate: "0",
					showButtons: "1",
					chain_mids: "",
					averageRating: 5,
					ratingCount: "48",
					fb_app_url: "/",
					ad: 0,
					endStyle: 0,
					isWide: 0,
					pwm: 1,
					s3base: "https:\/\/s3.amazonaws.com\/fs.goanimate.com\/,https:\/\/assets.vyond.com\/"},
				
				movie: process.env.SWF_URL + "/player.swf", // 'http://localhost/player.swf'
			};
			break;
		}
			
		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<html><head>
	     <script>document.title='${title}'</script>
<link href="https://josephcrosmanplays532.github.io/fonts/1/sailec.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/common_combined.css.gz.css" rel="stylesheet" type="text/css">

<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/cc.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/video.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/studio.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/video_export.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/vm5_alpha/banner.css.gz.css" rel="stylesheet" type="text/css">
<script>
var srv_tz_os = -4, view_name = "go", user_cookie_name = "u_info";
var user_role = 9;
</script>

<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/common_combined.js.gz.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/../po/goserver_js-en_US.json.gz.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>

<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery-ui-1.9.2.custom-core-interactions.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery.tmpl.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/trial_upsell.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/lib/moment.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/sessionChecker.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/amplitude/go_amp.js.gz.js"></script>

<!-- Vyond Cookie Consent -->
<script>(function(v,y,o,n){v[n]=v[n]||[];
var f=y.getElementsByTagName(o)[0],d=y.createElement(o);
d.type='text/javascript';d.async=true;d.src=
'https://ga.vyond.com/ajax/cookie_policy';
f.parentNode.insertBefore(d,f);
})(window,document,'script','_vyccq');</script>
<!-- End Vyond Cookie Consent -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV7MD');

dataLayer.push({"userId":"0Gpjt2-YIoGs","roleName":"Other","bl":"No"});
</script>
<!-- Google Tag Manager -->

<script>
    dataLayer.push({ 'useQualaroo': 1 });

</script>

<!-- Start of Zendesk Widget script -->
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","goanimate.zendesk.com");/*]]>*/</script>
<!-- End of Zendesk Widget script -->
<script>
zE(function() {
    zE.identify({"name":"devorem248","email":"devorem248@brayy.com"});
    zE.hide();
});
</script>
</head>
<body style="margin:0px">
<div class="navbar site-nav site-nav--legacy" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="/yourvideos" title="Vyond">
                      <svg class="Logo-ic16wp-0 eWNtRx" viewBox="0 0 112 56"><polygon points="18.041 44.172 12.314 11.828 17.217 11.828 20.648 34.634 24.079 11.828 28.981 11.828 23.255 44.172 18.041 44.172"></polygon><polygon points="38.285 16.083 34.538 16.083 38.843 30.026 38.843 39.917 42.252 39.917 42.252 30.026 46.557 16.083 42.809 16.083 40.547 25.603 38.285 16.083"></polygon><path d="M55.9083,18.5416c2.5448,0,4.2157,1.7219,4.2157,4.6526v9.3044c0,3.2119-1.5939,4.96-4.3186,4.96-2.7758,0-4.2918-1.7219-4.2918-5.0377V23.1172C51.5136,20.29,53.1325,18.5416,55.9083,18.5416Zm1.269,4.6367c0-1.2-.4656-1.7866-1.3713-1.7866s-1.37.5868-1.37,1.7866v9.6442c0,1.1991.4648,1.8113,1.37,1.8113s1.3713-.6122,1.3713-1.8113Z"></path><polygon points="74.482 16.083 74.482 31.593 69.52 16.083 66.211 16.083 66.211 39.917 69.621 39.917 69.621 25.364 74.482 39.917 77.926 39.917 77.926 16.083 74.482 16.083"></polygon><path d="M85.7209,11.8277h7.1012c5.5441,0,8.0634,2.8866,8.0634,8.8875V35.1467c0,6.1853-2.29,9.0256-7.8342,9.0256h-7.33Zm7.4678,27.5807c1.8789,0,2.6119-1.1914,2.6119-3.3905V20.4405c0-2.6575-1.2369-3.8481-3.9862-3.8481H90.6693v22.816Z"></path></svg>
                  </a>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav navbar-right">
<li class="dropdown">
    <a class="dropdown-toggle" href="https://support.vyond.com" data-toggle="dropdown">Help<span class="dropdown-caret"></span></a>
    <ul class="dropdown-menu dropdown-menu-help">

        <li>
            <a href="#" onclick="zE.activate({hideOnClose: true});amplitudeTrackCtaHelp('quick_search');return false;">Quick Search</a>
        </li>
        <li>
            <a href="https://support.vyond.com" onclick="amplitudeTrackCtaHelp('help_center');" target="_blank">Help Center</a>
        </li>
        <li>
            <a href="https://josephcrosmanplays532.github.io/whatsnew" onclick="amplitudeTrackCtaHelp('whats_new');" target="_blank">What’s New</a>
        </li>
    </ul>
</li>

<script>
    $('.dropdown-menu-help').click(function(e) {
        e.stopPropagation();
    });
</script>
		    <li>
                        <a class="hidden-sm hidden-md hidden-lg" href="/videomaker">Make a Video</a>
                        <span class="site-nav-btn hidden-xs"><a class="btn btn-orange" href="/videomaker">Make a Video</a></span>
                    </li>
<li class="dropdown">
    <a class="dropdown-toggle" href="https://app.vyond.com/v2/profile" data-toggle="dropdown">
        <span class="hidden-sm hidden-md hidden-lg">Your Account</span>
        <div class="site-nav__profile-image">
            <div class="badge-circle">JA</div>
        </div><span class="dropdown-caret"></span>
    </a>
    <ul class="dropdown-menu dropdown-menu-user">
        <li class="dropdown-user-profile">
            <div class="dropdown-user-profile__display-name">
                Joseph Animate 2021 (Owner)            </div>
            <div class="dropdown-user-profile__status">
                Free trial | <a href="https://www.vyond.com/pricing">Upgrade now</a>            </div>
        </li>
        <li class="divider"></li>
        <li><a href="/profile/you.html">Profile Settings</a></li>
        <li><a href="https://app.vyond.com/v2/users/list">Users</a></li>
        <li><a href="https://app.vyond.com/v2/security">Security</a></li>
        <li><a href="https://app.vyond.com/v2/subscription">Subscription</a></li>
        <li class="divider"></li>
        <li><a href="https://app.vyond.com/video/list" onClick="amplitudeTrackSwitchVideoMaker('Go to Vyond Studio')">Go to Vyond Studio</a></li>
        <li class="divider"></li>
        <li><a class="gtm-logout" href="https://ga.vyond.com/logoff">Log Out</a></li>
    </ul>
</li>

<script>
    $('.dropdown-menu-user').click(function(e) {
        e.stopPropagation();
    });
</script>
                </ul>
            </div>
    </div>
</div>

<script>
    jQuery('.logout-link').click(function(){
        amplitudeTrackEvent(AMPLITUDE_EVENT.LOGOUT, null);
    });
    </script>
<script>flashvars=${JSON.stringify(params.flashvars)}</script>${toObjectString(attrs, params)}${stuff.pages[url.pathname] || ""}
<footer class="site-footer">
    <div class="container">
        Vyond is a trademark of 2018 GoAnimate Inc. <a href="https://www.vyond.com/terms">Terms of Service</a> | <a href="https://www.vyond.com/privacy">Privacy Policy</a> | <a href="https://www.vyond.com/cookies">Cookie Policy</a>
    </div>
</footer>
</body>
</html>`
	);
	return true;
};
