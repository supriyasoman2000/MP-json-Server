//import json-server in index.js file
const jsonServer = require('json-server') 

//create a server for media player app
const mediaPlayerServer = jsonServer.create()

//setup path/route from json file
const router = jsonServer.router("db.json")

//returns middlewares used by JSON.server
const middlewares = jsonServer.defaults()

//setup port for running server
const port = 4000 || process.env.port

//use middlewares and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

//to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`MediaPlayerServer started at ${port}, and waiting for client request`);
})

