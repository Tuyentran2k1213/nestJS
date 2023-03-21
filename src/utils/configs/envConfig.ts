const dotenv = require('dotenv');

dotenv.config();
export const  port = process.env.PORT || 3001;
export const  dbPass = process.env.DB_CLUSTER_PASSWORD;
export const  dbAccessPass = process.env.DB_ACCESS_PASSWORD;
export const  dbAuth = process.env.DB_AUTH_PASSWORD;
export const  dbAddress = process.env.DB_ADDRESS;