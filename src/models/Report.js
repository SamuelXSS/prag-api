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
        this.belongsTo(models.Area, { foreignKey: 'area_id', as: 'areas' })
        this.belongsTo(models.Prague, { foreignKey: 'prague_id', as: 'pragues' })
    }
}

module.exports = Report;