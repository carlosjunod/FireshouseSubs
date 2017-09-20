// var mongoose = require('mongoose')
var Sequelize = require('sequelize')

const NODE_ENV = process.env.NODE_ENV || 'development'

if(NODE_ENV === 'development') {
  require('dotenv').load()
}

if(NODE_ENV === 'development') {
  var sequelize = new Sequelize( process.env.MARIA_DB, process.env.MARIA_USR, process.env.MARIA_PASS, {
    host: process.env.MARIA_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  });


} else {
  // TODO: USE HEROKU VARIABLES
  mongoose.connect(process.env.MONGODB_URI,  function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  })
}


// Tables
const Product = sequelize.define('product', {
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL
})

const Order = sequelize.define('order', {
  totalPrice: Sequelize.DECIMAL,
}, {
  instanceMethods: {
    getTotalPrice: function(prices){      
      let total = 0      
      prices.length !== 0 ? prices.forEach(price => total += price ) : 0   
      return total      
    }
  }
})

const Customer = sequelize.define('customer', {
  clientName: Sequelize.STRING,
})

// TODO: Relations
Order.hasMany(Product, {
  foreignKey: 'productID',
})


sequelize.sync();

exports.sequelize = sequelize
exports.Product = Product
exports.Order = Order
exports.Customer = Customer
