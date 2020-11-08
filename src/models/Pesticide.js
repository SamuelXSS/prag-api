const { Model, DataTypes } = require('sequelize');

class Pesticide extends Model {
    static init(sequelize){
        super.init({
            pesticide: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Prague, { foreignKey: 'pesticide_id', through:'prague_pesticides', as: 'pragues' })
    }
}

module.exports = Pesticide;