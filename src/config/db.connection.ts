import pg from 'pg';

const { Pool } = pg;

const db = new Pool({
  connectionString: 'postgres://postgres:123456@localhost:5432/poc_ts'
});

export default db;