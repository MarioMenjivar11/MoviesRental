import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const sale_movies = sequelize.define('sale_movies',{
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
    date_sale: {
        type: Sequelize.DATE
    },
    units: {
        type: Sequelize.INTEGER
    }
},{
    timestamps:false
});

export default sale_movies;