import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

import {app} from './routes/app.mjs';

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

async function main() {
   const pool = mysql.createPool(config.mysql);

   const rows = await pool.query(
      'SELECT * from full_survey'
   );

   console.log(rows);

   app.listen(8080, () => {
      console.log('server listening on port 8080')
   })
}

main();
