import express, { json } from 'express';
import morgan from 'morgan';

//Importing router
import moviesRoutes from './routes/movies';
import usersRoutes from './routes/users';

//Initialization
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/movies', moviesRoutes);
app.use('/api/users',usersRoutes);

export default app;


