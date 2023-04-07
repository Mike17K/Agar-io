function addPlayer(conn, data) {
    const sql = `INSERT INTO player (name, gameid,accesskey) VALUES ('${data.name}', ${data.gameid},'${data.accesskey}');`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} player added`);
    });
  }
  
  function removePlayer(conn, data) {
    const sql = `DELETE FROM player WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} player removed`);
    });
  }
  
  function updatePlayer(conn, data) {
    const sql = `UPDATE player SET name = '${data.name}',gameid = ${data.gameid} WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} player updated`);
    });
  }
  
function addMass(conn, data) {
    const sql = `INSERT INTO mass (playerid,posx,posy,mass) VALUES (${data.playerid},${data.posx},${data.posy},${data.mass});`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} mass added`);
    });
  }
  
  function removeMass(conn, data) {
    const sql = `DELETE FROM mass WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} mass removed`);
    });
  }
  
  function updateMass(conn, data) {
    const sql = `UPDATE mass SET posx = ${data.posx},posy = ${data.posy},mass = ${data.mass} WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} mass updated`);
    });
  }

  function addGame(conn, data) {
    const sql = `INSERT INTO game (name) VALUES ('${data.name}');`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} game added`);
    });
  }
  
  function removeGame(conn, data) {
    const sql = `DELETE FROM game WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} game removed`);
    });
  }
  
  function updateGame(conn, data) {
    const sql = `UPDATE game SET name = '${data.name}' WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} game updated`);
    });
  }



module.exports = {addPlayer,
removePlayer,
updatePlayer,
addMass,
removeMass,
updateMass,
 addGame,
removeGame,
updateGame };