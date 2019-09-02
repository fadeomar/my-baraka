BEGIN;
DROP TABLE IF EXISTS baraka_user, baraka_list, baraka_item;
CREATE TABLE baraka_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);
CREATE TABLE baraka_list (
    id SERIAL PRIMARY KEY,
    
    name VARCHAR NOT NULINSERT INTO baraka_item (content, is_done, list_id, user_idL
);
CREATE TABLE baraka_item (
    id SERIAL PRIMARY KEY,
    content VARCHAR,
    is_done BOOLEAN,
    list_id INTEGER REFERENCES baraka_list(id),
    user_id INTEGER REFERENCES baraka_user(id)
);
COMMIT;