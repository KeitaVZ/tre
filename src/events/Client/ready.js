const { prefix } = require("../../config.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");
   
    let statuses = ['/play | /help', `${prefix}play | ${prefix}help`, 'Posisi lagi main RP gaess', 'CIEEEEEE KENA GHOSTING YA!!!', 'Confess mulu ngomong di depan kicep kocag', 
'Lu olang bangsat aa', ];
    setInterval(function() {
  	let status = statuses[Math.floor(Math.random()*statuses.length)];		
        client.user.setPresence({
            activities: [
                {
                    name: status,
                    type: "PLAYING"
                }
            ],
            status: "online"
        });
    }, 5000)
 }
};