import DataTypes from 'sequelize'
import { sequelize } from '../config/Database'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'User',
    timestamps: false
});

module.exports = User
