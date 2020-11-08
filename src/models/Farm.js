const { Model, DataTypes } = require('sequelize');

class Farm extends Model {
    static init(sequelize){
        super.init({
            farm_name: DataTypes.STRING,
            ha: DataTypes.DECIMAL,
            latitude: DataTypes.DECIMAL,
            longitude: DataTypes.DECIMAL
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Area, { foreignKey: 'farm_id', as: 'areas' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
    }
}

module.exports = Farm;