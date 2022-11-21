import db from "./connection_mysql.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_stock;
    `);
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_types;
    `);
}

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_types (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    is_vegetarian BOOLEAN
);
`);

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(255),
    addded_to_stock TIMESTAMP,
    animal_feed_type_id INTEGER,
    CONSTRAINT fk_feed_type FOREIGN KEY (id) REFERENCES animal_feed_types(id)
);
`);

// seed the database
if (isInDeleteMode) {
    // db.execute(`INSERT INTO animal_feed_types (????) VALUES (???????);`);


    // db.execute(`INSERT INTO animal_feed_stock (????) VALUES (???????);`);

}

db.end();
