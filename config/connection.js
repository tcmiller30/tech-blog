const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        // Otherwise, it connects to the database declared in the .env file.
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;