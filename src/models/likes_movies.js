import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const likes_movies = sequelize.define('likes_movies',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_movie: {
        type: Sequelize.INTEGER
    },
    id_user: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

export default likes_movies;