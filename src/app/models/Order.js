module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    totalPrice: DataTypes.DECIMAL,
  }, {
    instanceMethods: {
      getTotalPrice: function(prices){      
        let total = 0      
        prices.length !== 0 ? prices.forEach(price => total += price ) : 0   
        return total      
      }
    }
  })
  return Order
}