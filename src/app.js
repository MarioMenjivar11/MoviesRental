import express, { json } from 'express';
import morgan from 'morgan';

//Importing router
import movies_routes from './routes/movies';
import users_routes from './routes/users';
import log_movies_routes from './routes/log_movies';

//Initialization
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/movies', movies_routes);
app.use('/api/users',users_routes);
app.use('/api/log_movies',log_movies_routes);

export default app;


