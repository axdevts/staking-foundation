const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
  }
  Users.init(
    {
      walletAddress: DataTypes.STRING,
      tokenIds: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Users',
      paranoid: true,
      timestamp: true,
      indexes: [
        {
          unique: true,
          fields: ['tokenIds'],
        },
      ],
    }
  );
  return Users;
};
