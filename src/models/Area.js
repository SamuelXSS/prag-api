const { Model, DataTypes } = require('sequelize');

class Area extends Model {
    static init(sequelize){
        super.init({
            area_name: DataTypes.STRING,
            ha: DataTypes.DECIMAL,
            status: DataTypes.STRING,
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
        this.hasMany(models.Report, { foreignKey: 'area_id', as:'reports' });
    }
}

module.exports = Area;