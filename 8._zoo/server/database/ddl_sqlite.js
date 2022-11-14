import db from "./connection_sqlite.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS animals;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    common_name VARCHAR(255),
    latin_name VARCHAR(255)
);
`);

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO animals (common_name, latin_name) VALUES ("tiger", "panthera tigris");`);
    db.run(`INSERT INTO animals (common_name, latin_name) VALUES ("panda", "ailuropoda melanoleuca");`);
}

