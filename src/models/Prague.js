const { Model, DataTypes } = require('sequelize');

class Prague extends Model {
    static init(sequelize){
        super.init({
            prague: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Pesticide, { foreignKey: 'prague_id', through:'prague_pesticides', as: 'pesticides' })
        this.belongsToMany(models.Report, { foreignKey: 'prague_id', through:'prague_areas', as: 'reports' })
    }
}

module.exports = Prague;