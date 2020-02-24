import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Users from './users';

const type_users = sequelize.define('type_users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    description: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});

type_users.BelongsTo(users, { foreignKey: 'id_type', sourceKey: 'id' });

export default type_users;
