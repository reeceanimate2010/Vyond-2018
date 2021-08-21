// By default, discord rpc will be enabled to tell your friends that you are using Vyond 2018. if you want to delete it, thats fine except for require("./server");. 
const RPC = require("discord-rpc");
require("./server");

const rpc = new RPC.Client({
	transport: "ipc"
});
rpc.on("ready", () => {
	rpc.setActivity({
		state: "Using The Old Vyond Legacy Video Maker.",
		startTimestamp: new Date(),
		largeImageKey: "icon",
		largeImageText: "Vyond 2018",
		smallImageKey: "Vyond 2018",
		smallImagetext: "Vyond 2018",
	});
	console.log("Rich presence is on!")
});
rpc.login({
	clientId: "866340172874383370"
}).catch(
	console.log('RPC connection failed.')
);
