const mysql = require('mysql');

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database :'world'
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM city", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});
