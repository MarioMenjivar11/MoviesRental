import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Movies = sequelize.define('movies',{
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Title:{
        type: Sequelize.STRING
    },
    Description:{
        type: Sequelize.TEXT
    },
    Stock:{
        type: Sequelize.INTEGER
    },
    RentalPrice:{
        type: Sequelize.DECIMAL
    },
    SalePrice:{
        type: Sequelize.DECIMAL
    },
    IdAvailability:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});



export default Movies;