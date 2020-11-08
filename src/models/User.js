const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            pass: DataTypes.STRING,
            token: DataTypes.STRING
        },{
            sequelize
        })
    }
        
    static associate(models){
        this.hasMany(models.Farm, { foreignKey: 'user_id', as: 'farms' })
    }
}

module.exports = User;