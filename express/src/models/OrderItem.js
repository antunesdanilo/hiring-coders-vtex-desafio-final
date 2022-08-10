module.exports = (sequelize, DataType) => {
  const Model = sequelize.define("OrderItem", {
    orderItemId: {
      type: DataType.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    productId: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    quantity: {
      type: DataType.INTEGER(2),
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'order_item',
    timestamps: true
  });

  Model.associate = (models) => {
    Model.belongsTo(models.Order, {
      as: 'order',
      foreignKey: {
        allowNull: true,
        field: 'orderId',
        name: 'orderId'
      }
    });
    Model.belongsTo(models.Product, {
      as: 'product',
      foreignKey: {
        allowNull: true,
        field: 'productId',
        name: 'productId'
      }
    });
  };

  return Model;
};
