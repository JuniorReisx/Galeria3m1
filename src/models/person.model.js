import { DataTypes } from "sequelize";
import { database } from "../database/db.js";


export const Cadastro = database.define(
    'Cadastro',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password:{
            type:DataTypes.STRING,
            allowNull: false
          }
    }


)