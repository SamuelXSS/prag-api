const { Model, DataTypes } = require('sequelize');

class Report extends Model {
    static init(sequelize){
        super.init({
            infested: DataTypes.BOOLEAN,
            inseticide_applied: DataTypes.BOOLEAN
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Area, { foreignKey: 'area_id', through: 'prague_areas', as: 'areas' })
        this.belongsToMany(models.Prague, { foreignKey: 'prague_id',through: 'prague_areas', as: 'pragues' })
    }
}

module.exports = Report;