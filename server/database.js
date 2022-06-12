// Import path module
const path = require('path');

// Get location of databse.sqlite file
const dbPath = path.resolve(__dirname, 'database/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
    client: "sqlite3",
    connection: {
      filename: dbPath,
    }, 
    useNullAsDefault: true
})


