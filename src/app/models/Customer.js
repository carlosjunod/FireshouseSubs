module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    clientName: DataTypes.STRING,
  })
  return Customer
}