import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Users = sequelize.define({
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    FirstName: {
        type: Sequelize.STRING
    },
    LastName: {
        type: Sequelize.STRING
    },
    Birthday: {
        type: Sequelize.DATE
    },
    IdType: {
        type: Sequelize.INTEGER,
        
    }
},{
    timestamps: false
})

export default Users;