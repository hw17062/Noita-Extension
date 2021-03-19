var twitch = window.Twitch.ext;
var auth_vars = null
var version = "0.0.1"

window.Twitch.ext.onAuthorized(function(auth) {
  auth_vars = auth;
});

function chatMessage() {
    var url = "https://api.twitch.tv/extensions/" + auth_vars.clientId  + "/" + version +  "/channels/" + auth_vars.channelId + "/chat";
    var jwt = auth_vars.token;
    var id = auth_vars.clientId;
    var message = "Hello World!";

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Client-ID': id,
            'Authorization': "Bearer " + jwt,
        },
        body: { text: message }
    }).catch ((err) => {
        console.log(err);
    });

}


function vote_for_event(voting_num) {
  window.Twitch.ext.rig.log(voting_num)
  window.Twitch.ext.rig.log(auth_vars)
  chatMessage()
}
