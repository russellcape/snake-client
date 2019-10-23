let connection;



const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {
    console.log(key)
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up")
    }
    if (key === 's') {
      conn.write("Move: down")
    }
    if (key === 'd') {
      conn.write("Move: right")
    }
    if (key === 'a') {
      conn.write("Move: left")
    }
    if (key === 'i') {
      conn.write("Say: Its mine!")
    }
    if (key === 'l') {
      conn.write("Say: Loser!!!")
    }
    if (key === 'h') {
      conn.write("Say: Haha, heehee")
    }
  };

  stdin.on('data', handleUserInput);
  return stdin;
};



module.exports = setupInput;