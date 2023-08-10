
SELECT datname FROM pg_database WHERE datname = 'investments';

CREATE DATABASE investments;


\c investments;


CREATE TABLE IF NOT EXISTS opportunities (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    investment_amount INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS investments (
    id SERIAL PRIMARY KEY,
    investor_name TEXT,
    amount INTEGER,
    opportunity_name TEXT,
    date_invested DATE,
    opportunity_id INTEGER REFERENCES opportunities(id)
);


CREATE TABLE IF NOT EXISTS investors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    balance INTEGER NOT NULL
);



INSERT INTO opportunities (name, investment_amount) VALUES
    ('Bienes Raíces', 100000),
    ('Tecnología', 250000),
    ('Manufactura', 300000),
    ('Desarrollo', 425000);


INSERT INTO investors (name, balance) VALUES
    ('Xavier', 300000),
    ('Erick', 150000),
    ('Pedro', 500000),
    ('Francisco', 250000),
    ('Pablo', 120000);
