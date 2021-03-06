DROP TABLE IF EXISTS fruits;
DROP TABLE IF EXISTS pies;
DROP TABLE IF EXISTS pizzas;
DROP TABLE IF EXISTS plants;
DROP TABLE IF EXISTS rats;


CREATE TABLE fruits (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    month TEXT NOT NULL,
    good_on_pizza BOOL NOT NULL
);

CREATE TABLE pies (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    filling TEXT NOT NULL,
    crust TEXT NOT NULL,
    servings INTEGER NOT NULL
);

CREATE TABLE pizzas (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    toppings TEXT NOT NULL,
    rating INTEGER NOT NULL
);

CREATE TABLE plants (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    common_name TEXT NOT NULL,
    scientific_name TEXT NOT NULL,
    light TEXT NOT NULL,
    difficulty INTEGER NOT NULL
);

CREATE TABLE rats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    size TEXT NOT NULL,
    location TEXT NOT NULL,
    likes_pizza BOOL NOT NULL
);

