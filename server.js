const mysql = require('mysql');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { addPlayer, removePlayer, updatePlayer, addMass, removeMass, updateMass, addGame, removeGame, updateGame } = require('./db_functions');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agariodb'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database',err) ;
        return;
    }
    console.log('Connected to the database!');

    connection.query("SELECT id FROM game;", (error, results, fields) => {
        if(results.length ==0){
            addGame(connection,{name:"default"});
        }
    });
    
});

/*
connection.end((err) => {
  if (err) {
    console.error('Error closing the database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});
*/

io.on('connection',client => {
    console.log("Conection!");

    client.on('join-game-request',joinGameHandler);
    client.on('update-request', sendUpdateHandler);
    client.on('event', eventHandler);
    client.on('disconnect', disconnectHandler);
    client.on('set-profile', (data)=>{
        addedClientHandler(client,data);
    });

    // here the event is for development only remove it first 
    // event is 'join-game-request' for every user if need for connection
    client.emit('give-profile');
}
);


function addedClientHandler(client,data){
    connection.query('SELECT * FROM player', (error, results, fields) => {
        if (error) throw error;
        // use the results
        //console.log(results);

        // if the player allowed to join to server make an access key
        let accesskey='';
        let counter = 0;
        let length = 20; // in the database is accesskey: varchar(20)
        while (counter < length) {
            accesskey += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
        }
        addPlayer(connection,{name:data.name,gameid:1,accesskey:accesskey});
        // add data of player to server and transmit the key to con
        client.emit("recive-access-key",accesskey);
    });      
}

function joinGameHandler(data){
console.log("res");
}

function sendUpdateHandler(data){
// send update data to client
// input data = {name , accesskey}
let isValid = data.accesskey.split("").length==20;
for(let i=0;i<20;i++){
    let inArray = false;
    for(let char of characters){
        if(char==data.accesskey[i]){
            inArray = true;
            break;
        }
    }
    if(inArray){
    }else{
        console.log("not in array");
        isValid=false;
    }
}
if(isValid){
    connection.query(`SELECT id FROM player WHERE accesskey='${data.accesskey}' and name='${data.name}';`, (error, results, fields) => {
        console.log('results: ',results);
    });  
}
};

function eventHandler(data){
    // handling key inputs
console.log("res");
}

function disconnectHandler(data){
console.log("res");
}

server.listen(3000,()=> console.log("Running on port 3000..."));
