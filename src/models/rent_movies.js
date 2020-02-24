import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const rent_movies = sequelize.define('rent_movies',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_movie: {
        type: Sequelize.INTEGER
    },
    id_user: {
        type: Sequelize.INTEGER
    },
    date_rental: {
        type: Sequelize.DATE
    },
    date_return: {
        type: Sequelize.DATE
    }
},{
    timestamps: false
});

export default rent_movies;