import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import rent_movies from './rent_movies';
import sale_movies from './sale_movies';

const Users = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.DATE
    },
    id_type: {
        type: Sequelize.INTEGER,
        
    }
},{
    timestamps: false
});

users.hasMany(rent_movies, {foreignKey: 'id_user', sourceKey: 'id' });

users.hasMany(sale_movies, { foreignKey: 'id_user', sourceKey: 'id' });

export default users;