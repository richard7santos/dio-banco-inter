import { Pool } from "pg";

const connectionString = 'postgres://iislivxi:LAG6qNRcSGrKmIxZfbmolRtrnf1czPbB@motty.db.elephantsql.com/iislivxi';

const db = new Pool({connectionString});

export default db;