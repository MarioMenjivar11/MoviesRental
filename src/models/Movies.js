import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import log_movies from './log_movies';
import rent_movies from './rent_movies'
import sale_movies from './sale_movies';
import likes_movies from './likes_movies';

const movies = sequelize.define('movies',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.TEXT
    },
    stock:{
        type: Sequelize.INTEGER
    },
    rental_price:{
        type: Sequelize.DECIMAL
    },
    sale_price:{
        type: Sequelize.DECIMAL
    },
    id_availability:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

movies.hasMany(log_movies,{ foreignKey: 'id_movie', sourceKey: 'id' });
movies.hasMany(rent_movies, { foreignKey: 'id_movie', sourceKey: 'id' });
movies.hasMany(sale_movies, { foreignKey: 'id_movie', sourceKey: 'id' });
movies.hasMany(likes_movies, { foreignKey: 'id_movie', sourceKey: 'id' });

export default movies;