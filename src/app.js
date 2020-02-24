import express, { json } from 'express';
import morgan from 'morgan';

//Importing router
import movies_routes from './routes/movies';
import users_routes from './routes/users';

//Initialization
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/movies', movies_routes);
app.use('/api/users',users_routes);

export default app;


