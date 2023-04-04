const mysql = require('mysql');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { addPlayer, removePlayer, updatePlayer, addMass, removeMass, updateMass, addGame, removeGame, updateGame } = require('./db_functions');


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
    console.log("Conected: " + client);
    client.on('join-game-request', joinGameHandler);
    client.on('update', sendUpdateHandler);
    client.on('event', eventHandler);
    client.on('disconnect', disconnectHandler);
    client.on('set-profile', addedClientHandler);

    client.emit('give-profile');
}
);



function addedClientHandler(client){
    connection.query('SELECT * FROM player', (error, results, fields) => {
        if (error) throw error;
        // use the results
        console.log(results);
    });      
}

function joinGameHandler(data){
console.log("res");
}

function sendUpdateHandler(data){
console.log("res");
}

function eventHandler(data){
console.log("res");
}

function disconnectHandler(data){
console.log("res");
}

server.listen(3000,()=> console.log("Running on port 3000..."));
