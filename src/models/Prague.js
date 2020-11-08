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
    }
}

module.exports = Prague;