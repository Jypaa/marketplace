const db = require('../db/pool');
const store = {
  findAll: () => new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err)
        return reject(err);
        
      connection.query('SELECT * FROM store;', (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  
  }),
  findById: (id) => new Promise((resolve, reject) => {
    const selectQuery = 'SELECT * FROM store WHERE id=?;';
    db.getConnection((err, connection) => {
      if (err)
        return reject(err);
      
      connection.query(selectQuery, id, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
  save: (store) => new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err)
        return reject(err);
      
      connection.query('INSERT INTO store SET ?', store, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
  findByStore: (store) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      const selectQuery = 'SELECT * FROM store WHERE product LIKE ? AND seller LIKE ?;';
      connection.query(selectQuery,[store.product, store.seller], (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
  deleteById: (id) => new Promise((resolve, reject) => {
    const deleteQuery = 'DELETE FROM store WHERE id=?;';
    db.getConnection((err, connection) => {
      if (err)
        return reject(err);
      
      connection.query(deleteQuery, id, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
  updateById: (store) => new Promise((resolve, reject) => {
    const updateQuery = 'UPDATE store SET product = ?, seller = ?, price = ? WHERE id = ?;';
    db.getConnection((err, connection) => {
      if (err)
        return reject(err);
      
      connection.query(updateQuery, [store.name, store.product, store.id], (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
};
module.exports = store;