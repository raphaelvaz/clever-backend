import { DataTypes } from "sequelize/types";
import { db } from "../connection";


const Account = db.define('account', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birhDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

export { Account };