function addPlayer(conn, data) {
    const sql = `INSERT INTO player (name, gameid) VALUES ('${data.name}', ${data.gameid});`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
    });
  }
  
  function removePlayer(conn, data) {
    const sql = `DELETE FROM player WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) deleted`);
    });
  }
  
  function updatePlayer(conn, data) {
    const sql = `UPDATE player SET name = '${data.name}',gameid = '${data.gameid}' WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
    });
  }
  
function addMass(conn, data) {
    const sql = `INSERT INTO mass (playerid,posx,posy) VALUES (${data.playerid},${data.posx},${data.posy});`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
    });
  }
  
  function removeMass(conn, data) {
    const sql = `DELETE FROM mass WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) deleted`);
    });
  }
  
  function updateMass(conn, data) {
    const sql = `UPDATE mass SET posx = '${data.posx},posy = '${data.posy}' WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
    });
  }

  function addGame(conn, data) {
    const sql = `INSERT INTO game (name) VALUES ('${data.name}');`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
    });
  }
  
  function removeGame(conn, data) {
    const sql = `DELETE FROM game WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) deleted`);
    });
  }
  
  function updateGame(conn, data) {
    const sql = `UPDATE game SET name = '${data.name}' WHERE id = ${data.id};`;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`${result.affectedRows} record(s) updated`);
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