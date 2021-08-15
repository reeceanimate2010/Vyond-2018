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
		case "/go/movie/": {
			title = "Video Player - GoAnimate Retro";
			attrs = {
				data: "https://josephcrosmanplays532.github.io/animation/animation/player.swf",
				type: "application/x-shockwave-flash",
                                
				id: "Player",
                                width: "550",
                                height: "384",
				bgcolor: "#464646",

                                align: "middle",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                wmode: "transparent",

                                hasVersion: "10.3",
				quality: "medium"
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: "https://josephcrosmanplays532.github.io/store/50/<store>",
					ut: 60,
					autostart: 1,
					isWide: 1,
					clientThemePath: "https://josephcrosmanplays532.github.io/static/146/<client_theme>",
					userId: "",
					movieId: "",
					chain_mids: "",
					movieLid: "1",
					movieTitle: "Underdog and sweet Polly for MPB Today",
					movieDesc: "help eliminate your grocery bill with MPB Today\nNo monthly fees\nNo autoship\nNo inventory",
					appCode: "go",
					thumbnailURL: "/movie_thumbs/<movieId>.png",
					fb_app_url: "/",
					copyable: "0",
					showButtons: "1",
					tlang: "en_US",
					ctc: "go",
					isEmbed: "1",
					is_private_shared: "0",
					isPublished: "1",
					originalId: "0zEt_fo4L-5k",
					is_slideshow: "0",
					is_emessage: "0",
					averageRating: "0",
					ratingCount: 0,
				},
				movie: "https://josephcrosmanplays532.github.io/animation/animation/player.swf", // 'https://josephcrosmanplays532.github.io/animation/animation/http://localhost/player.swf'
			};
			break;
		}
			
		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
<title>GoAnimate - Watch animation - test</title>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/prototype/1.6.0.2/prototype.js"></script>
<script src="/static/go/js/go2.js"></script>
<script src="/static/go/js/swfobject.js"></script>
<script src="/static/go/js/comment.js"></script>
<script src="/static/go/js/gotabs.js"></script>
<script src="/static/go/js/movie.js"></script>
<script src="/static/go/js/gofan.js"></script>
<link href="/static/go/css/global.css" rel="stylesheet" type="text/css"/>
<link href="/static/go/css/movie.css" rel="stylesheet" type="text/css"/>
<link href="/static/go/css/star_rating.css" rel="stylesheet" type="text/css"/>

<script defer type="text/javascript" src="/static/go/js/pngfix.js"></script>

</head>
<body>

<!-- PAGE STRUCTURE -->
<div class="container">

    <!-- HEADER -->
    <div class="header">
        <div class="logo">
        	        	<a href="https://josephcrosmanplays532.github.io/go/">
        	        		<img id="gologo" alt="GoAnimate logo" src="/static/go/img/v2/go_logo_03.gif"/>
        	        	</a>
        	        </div>
        
        <div class="globalnav">
            <ul>
            	                <li><a href="/users/signup.php?returnto=%2Fgo%2Fmovie%2F02u3atZJu3IA%2F1">Sign Up</a></li>
                <li><a href="/users/signup.php?returnto=%2Fgo%2Fmovie%2F02u3atZJu3IA%2F1">Login</a></li>
				                
            </ul>
        </div>
        
        <div class="search">
            <form name="searchForm" action="https://josephcrosmanplays532.github.io/go/searchresults" method="GET">
	        <div style="float:left;">
			<input type="text" name="criteria">
                </div>
	        <div id="searchButton">
	                <a href="#" onclick="document.searchForm.submit();">&nbsp;&nbsp;&nbsp;<span>Search GoAnimate</span>&nbsp;&nbsp;&nbsp;</a>
                </div>
	    </form>
	</div>
        
        <div class="topnav">
            <ul>
                <li class="create"><a href="https://josephcrosmanplays532.github.io/go/studio"></a></li>
                <li class="watch"><a href="https://josephcrosmanplays532.github.io/go/watch"></a></li>
                <li class="mingle"><a href="https://josephcrosmanplays532.github.io/go/mingle"></a></li>
	    </ul>
            <div class="gap"></div>
            <ul>
                <li class="contests"><a href="https://josephcrosmanplays532.github.io/go/contest"></a></li>
                <li class="help"><a href="https://josephcrosmanplays532.github.io/go/howdoesitwork"></a></li>
            </ul>
        </div>
    
	
	<!-- Top menu Ends -->
	<a name="skipmenu" display="none"></a>

	<div id="feedback_block" style="display:none;">
	                <div id="feedback" align="center" class="info">
		                		</div>
	</div>
    </div>
    <!-- END OF HEADER -->
    
    <!-- TODO: need feedback block in here somewhere -->

    <!-- MAIN CONTENT -->
    <div class="content">

        <div class="left">
	    <h1>test</h1>
            <meta name="title" content="test"/>
<meta name="description" content="see how smart you are"/>
<link rel="image_src" href="https://josephcrosmanplays532.github.io//files/thumbnails/movie/1543/127543/53657.jpg"/>
<div>
	<div id="playerdiv" align="center" style="width:550px;height:384px;">
  		This content requires the Macromedia Flash Player 9.0.28. <a href="https://www.macromedia.com/go/getflash/">Get Flash</a>
	</div>

	<div>	  
		${toObjectString(attrs, params)}
	</div>
</div>
<!-- SHARING BUTTONS COMMENTED OUT FOR NOW WAITING FOR ALL BUTTONS TO BE ADDED
	        <div class="sharing_buttons">
	            <ul>
	                <li class="favorite"><a href="javascript:favoriteMovie(53657);"></a></li>
	                <li class="flag"><a href="javascript:flagMovie(53657);"></a></li>
	            </ul>
	        </div>
-->
	       
       		<div class="movie_rating">
    <div style="float:left;width:150px;"><span class="time" style="float:right;padding-top:2px;">11 ratings</span><div style="overflow:hidden;" onmouseover="loginToRate('ratingStars', 'ratingLogin');" onmouseout="hideLoginToRate('ratingStars', 'ratingLogin');">
   <div id="ratingStars">
		<ul class="star-rating">
		<li id="movie_53657_rating" class="current-rating" style="width:80px;">Currently 4.4545454545455/5 Stars.</li>
					<li><a class="one-star" href="#" onclick="javascript:postRating(53657, 1,'movie');return null;" title="Poor">1</a></li>
		<li><a class="two-stars" href="#" onclick="javascript:postRating(53657, 2,'movie');return null;" title="Nothing Special">2</a></li>
		<li><a class="three-stars" href="#" onclick="javascript:postRating(53657, 3,'movie');return null;" title="Worth Watching">3</a>&lt;/li`
	);
	return true;
};
