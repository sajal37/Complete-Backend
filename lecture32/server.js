const {WebSocketServer} = require('ws');
const wss = new WebSocketServer({port: 8080});


let rooms=new Map();
// {
//     "1234":[s1, s2, s3]
// }
wss.on("connection", function(socket){
    console.log("a new user connected");
    socket.on("message", function(message){
        let parsedMessage=JSON.parse(message);
        if(parsedMessage.type==="join"){
    }})
});