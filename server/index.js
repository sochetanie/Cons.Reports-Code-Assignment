const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log('running server on 3001');
});

// NOTE: in case if you created DB and table directlly at MySQL Workbench(no need mysql.createConnection and db.connect)
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'CRDB',
// });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'CRDB',
});

db.connect(err => {
  if (err) { throw err; }
  const sql = "CREATE TABLE IF NOT EXISTS userInput1 (id INT AUTO_INCREMENT PRIMARY KEY, input VARCHAR(50) NOT NULL, response int)";
  db.query(sql, (err, result) => {
    if (err) { throw err; }
    console.log("Table created", result);
  });
});

app.post('/', (require, resp) => {
  const userInput = require.body.input;

  let tempValue = userInput;
  let result = '';
  while (tempValue.includes('aaa') || tempValue.includes('aba')) {
    if (tempValue.includes('aaa') && (tempValue.indexOf('aaa') === 0 || !tempValue.includes('aba'))) {
      tempValue = tempValue.replace('aaa', '');
      result += '1';
    }
    if (tempValue.includes('aba') && (tempValue.indexOf('aba') === 0 || !tempValue.includes('aaa'))) {
      tempValue = tempValue.replace('aba', '');
      result += '2';
    }
  }

  const sql = "INSERT INTO userInput (input, response) VALUES (?,?);"
  db.query(sql, [userInput, result], (err, r) => {
    if (err) {
      console.log('err', err);
      throw err;
    } else {
      resp.send(result);
    }
  });
});

app.get('/:input', (require, resp) => {
  const userInput = require.params.input;
  const sql = "SELECT response FROM userInput where input = ?;"
  db.query(sql, [userInput], (err, result) => {
    if (err) {
      console.log('err', err);
      throw err;
    } else {
      resp.send(result);
    }
  });
});