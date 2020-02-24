import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const log_movies = sequelize.define('log_movies',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
       type: Sequelize.STRING 
    },
    rental_price: {
        type: Sequelize.DECIMAL
    },
    sale_price: {
        type: Sequelize.DECIMAL
    },
    id_movie: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

export default log_movies;