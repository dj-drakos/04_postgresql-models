import pool from '../utils/pool.js';

export default class Rat {
    id; 
    name; 
    size;
    location;
    likesPizza;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.size = row.size;
        this.location = row.location;
        this.likesPizza = row.likes_pizza;
    }

    static async create({ name, size, location, likesPizza }) {
        const { rows } = await pool.query(
            'INSERT INTO rats (name, size, location, likes_pizza) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, size, location, likesPizza]
        );

        return new Rat(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM rats');
        return rows.map((row) => new Rat(row));
    }

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM rats WHERE id=$1', [id]);
        return new Rat(rows[0]);
    }

    static async updateById(id, { name, size, location, likesPizza }) {
        const existingRat = await Rat.getById(id);
        const newName = name ?? existingRat.name;
        const newSize = size ?? existingRat.size;
        const newLocation = location ?? existingRat.location;
        const newLikesPizza = likesPizza ?? existingRat.likesPizza;

        const { rows } = await pool.query('UPDATE rats SET name=$1, size=$2, location=$3, likes_pizza=$4 WHERE id=$5 RETURNING *',
        [newName, newSize, newLocation, newLikesPizza, id]
        );

        return new Rat(rows[0]);
    }

    static async deleteById(id) {
        const { rows } = await pool.query(
            'DELETE FROM rats WHERE id=$1 RETURNING *',
            [id]
        );

        return new Rat(rows[0]);
    }

}