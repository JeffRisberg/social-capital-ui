const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const config = {
   openai: {
      apiKey: process.env.OPENAI_API_KEY
   },
   mysql: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
   }
};

const pool = mysql.createPool(config.mysql);

const rows = pool.query(
   'SELECT * from surveys'
);

console.log(rows);

const app = require('./routes/app');

app.listen(8080, () => {
   console.log('server listening on port 8080')
})
