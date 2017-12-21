var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jack50611',
  database : 'golf_db'
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

connection.connect();

let sql = 'select * from score_name';
connection.query(sql, (err, rows, fields) => {
  console.log('test_userテーブル: ', rows[0].score_name_value);
  const ddd = rows[0].score_name_value;
  console.log(ddd)
});
connection.end();
