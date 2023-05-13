const { Model, DataTypes } = require('sequelize')

class Posts extends Model {
    static init(sequelize) {
        super.init({
            cabecalho: DataTypes.STRING,
            titulo: DataTypes.STRING,
            data: DataTypes.STRING,
            artigo: DataTypes.STRING,
            img: DataTypes.STRING,
        }, {
            sequelize,
            timestamps: false
        })
    }
}

module.exports = Posts