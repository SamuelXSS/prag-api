require('dotenv').config()
module.exports = {
    dialect : 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
	database: 'pragmenos_db',
	ssl: false,
    define: {
        timestamps: true,
        underscored: true,
    }
}