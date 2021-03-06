module.exports.build = (client) => {
  var express = require("express");
  const app = express();
  var jwt = require("jsonwebtoken");
  var secrets = require("./apiconfig.json").secrets;
  app.get("/api/:clientid/:token", function (req, res) {
    var token = jwt.verify(req.params.token, secrets[ req.params.clientid ]);
    switch ( token.action ) {
      case "getMember":
        require("./api_endpoints/getMember")(req, res, client, token);
        break;
      case "getRole":
        require("./api_endpoints/getRole")(req, res, client, token);
        break;
      case "getAllRoles":
        require("./api_endpoints/getAllRoles")(req, res, client, token);
        break;
      case "getAllMembers":
        require("./api_endpoints/getAllMembers")(req, res, client, token);
        break;
      case "getAllChannels":
        require("./api_endpoints/getAllChannels")(req, res, client, token);
        break;
      case "sendChannelMessage":
        require("./api_endpoints/getAllMembers")(req, res, client, token);
        break;
    }
  })
  // Deprecated for now
  //app.listen(8000, () => 
  //console.log('Listening on port 8000!')
  //)
}