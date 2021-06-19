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
	return `<object id="obj" ${Object.keys(attrs)
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
		case "/cc": {
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
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					original_asset_id: query["id"] || null,
					themeId: "business",
					ut: 60,
					bs: "default",
					appCode: "go",
					page: "",
					siteId: "go",
					m_mode: "school",
					isLogin: "Y",
					isEmbed: 1,
					ctc: "go",
					tlang: "en_US",
				},
				allowScriptAccess: "always",
				movie: process.env.SWF_URL + "/cc.swf", // 'http://localhost/cc.swf'
			};
			break;
		}

		case "/cc_browser": {
			title = "CC Browser";
			attrs = {
				data: process.env.SWF_URL + "/cc_browser.swf", // data: 'cc_browser.swf',
				type: "application/x-shockwave-flash",
				id: "char_creator",
				width: "100%",
				height: "100%",
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					original_asset_id: query["id"] || null,
					themeId: "family",
					ut: 60,
					appCode: "go",
					page: "",
					siteId: "go",
					m_mode: "school",
					isLogin: "Y",
					isEmbed: 1,
					ctc: "go",
					tlang: "en_US",
					lid: 13,
				},
				allowScriptAccess: "always",
				movie: process.env.SWF_URL + "/cc_browser.swf", // 'http://localhost/cc_browser.swf'
			};
			break;
		}

		case "/go_full": {
			let presave =
				query.movieId && query.movieId.startsWith("m")
					? query.movieId
					: `m-${fUtil[query.noAutosave ? "getNextFileId" : "fillNextFileId"]("movie-", ".xml")}`;
			title = "Video Editor";
			attrs = {
				data: process.env.SWF_URL + "/go_full.swf",
				type: "application/x-shockwave-flash",
				
				id: "Studio",
                                swf: "https://d3v4eglovri8yt.cloudfront.net/animation/66453a3ba2cc5e1b/go_full.swf",
				width: "100%",
				height: "100%",
				
				align: "middle",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                wmode: "window",
				
				hasVersion: "10.3",
			};
			params = {
				flashvars: {
					movieId: "",
			                loadas: 0,
			                asId: "",
		  	                originalId: "",
			                apiserver: "/",
			                storePath: process.env.STORE_URL + "/<store>",
			                clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
			                animationPath: process.env.SWF_URL + "/",
			                userId: "0cf4CMw1ZNCk",
			                username: "bakeryb40488",
			                uemail: "bakeryb40488@gmail.com",
			                numContact: "0",
			                ut: 23,
			                ve: false,
			                isEmbed: 0,
			                nextUrl: "/go/savedMovie/?movieId=<movieId>",
			                bgload: process.env.SWF_URL + "/go_full.swf",
			                lid: "13",
			                ctc: "go",
			                themeColor: "silver",
			                tlang: "en_US",
			                siteId: "13",
			                templateshow: "false",
			                forceshow: "false",
			                appCode: "go",
			                lang: "en",
			                tmcc: 4048901,
			                fb_app_url: "/",
			                is_published: "0",
			                is_private_shared: "1",
			                is_password_protected: false,
			                upl: 1,
			                hb: "1",
			                pts: "1",
			                msg_index: "",
			                ad: 0,
			                has_asset_bg: 1,
			                has_asset_char: 0,
			                initcb: "studioLoaded",
			                retut: 0,
			                featured_categories: null,
			                s3base: "https://josephcrosmanplays532.github.io/s3base",
			                st: "",
			                uisa: 0, 
			                u_info: "OjI6elg5SnZCOUEyTHZiY2lhZGRXTm9Nd0ljVWhNbEpGaXJFdkpEdkltdEp6RWhrQ0VIbXZIVTBjRTlhUGZKMjJoVHVTUE5vZk1XYnFtSE1vZG5TeldyQVJNcDFmUFB2NDVtR0FTSlZZ",
			                tm: "FIN",
			                tray: "custom",
			                isWide: 1,
			                newusr: 1,
			                goteam_draft_only: 0};
			break;
		}

		case "/player": {
			title = "Player";
			attrs = {
				data: process.env.SWF_URL + "/player.swf",
				type: "application/x-shockwave-flash",
				width: "100%",
				height: "100%",
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: process.env.STORE_URL + "/<store>",
					ut: 60,
					autostart: 1,
					isWide: 1,
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
				},
				allowScriptAccess: "always",
				allowFullScreen: "true",
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<script>document.title='${title}',flashvars=${JSON.stringify(
			params.flashvars
		)}</script><body style="margin:0px">${toObjectString(attrs, params)}</body>${stuff.pages[url.pathname] || ""}`
	);
	return true;
};
