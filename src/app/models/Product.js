const db = require('../db')

exports.findAll = (success, err) => {
  db.Product.findAll().then(success).catch(err);
}