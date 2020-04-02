import mysql from 'mysql'

let pool = mysql.createPool({
    password: 'Frontier280',
    user: 'root',
    database: 'hollar_db',
    host: 'localhost',
    port: '3306'
});

let howldb = {};

howldb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM howls', (err, results) => {
            if (err) {
                connection.end()
                return reject(err);
            }
            return resolve(results);
        })
    })
}

howldb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM howls WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}