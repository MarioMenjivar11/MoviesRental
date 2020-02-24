import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import movies from './movies';

const availability = sequelize.define('availability',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description:{
        type = Sequelize.STRING
    }
},{
    timestamps: false
});

availability.BelongsTo(Movies, { foreignKey: 'id_availability', sourceKey: 'id' });


export default availability;