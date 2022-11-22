import { sequelize } from "../database/database.js"
import { DataTypes } from "sequelize"

export const product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(67),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categories: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "Aparently we have no description to offer you, please tell us if we don´t"
    }
}, { timestamps: false })