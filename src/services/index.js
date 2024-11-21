import knex from 'knex'

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'postgres',
    },
})

export const Service = {
    async create(todo) {
        try {
            return db('todos').insert(todo).returning('*')
        } catch (error) {
            throw new Error(error)
        }
    },
    findAll() {
        try {
            return db.select('*').from('todos')
        } catch (error) {
            throw new Error(error)
        }
    },
    findOne(id) {
        try {
            return db.select('*').from('todos').where('id', '=', id)
        } catch (error) {
            throw new Error(error)
        }
    },
    update(id, todo) {
        try {
            return db('todos').where('id', '=', id).update(todo).returning('*')
        } catch (error) {
            throw new Error(error)
        }
    },
    delete(id) {
        try {
            return db('todos').where('id', '=', id).del()
        } catch (error) {
            throw new Error(error)
        }
    },
}
