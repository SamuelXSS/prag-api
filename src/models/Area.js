const { Model, DataTypes } = require('sequelize');

class Area extends Model {
    static init(sequelize){
        super.init({
            area_name: DataTypes.STRING,
            ha: DataTypes.DECIMAL,
            latitude: DataTypes.DECIMAL,
            longitude: DataTypes.DECIMAL,
            planting_date: DataTypes.DATE,
            harvest_date: DataTypes.DATE,           
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Farm, { foreignKey: 'farm_id', as: 'farms' });
    }
}

module.exports = Area;