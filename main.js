// if you don't want the discord rpc on vyond 2018. that's fine. you can delete it except for require("./server);. but it will be enabled by default for heroku.
const RPC = require("/node_modules/discord-rpc");
require("./server");

const rpc = new RPC.Client({
	transport: "ipc"
});
rpc.on("ready", () => {
	rpc.setActivity({
		state: "Just Making A Video On The Old Vyond Legacy Video Maker.",
		startTimestamp: new Date(),
		largeImageKey: "icon",
		largeImageText: "Vyond 2018",
		smallImageKey: "Vyond 2018",
		smallImagetext: "Vyond 2018",
	});
	console.log("Rich presence is on!")
});
// Connects RPC to app
rpc.login({
	clientId: "866340172874383370"
}).catch(
	console.log('RPC connection failed.')
);
