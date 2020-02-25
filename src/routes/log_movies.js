import { Router } from 'express';
const router = Router();

import { create_log_movie, get_log_movies, get_one_log_movie, delete_log_movie, update_log_movies } from '../controllers/log_movies.controller'

//api/log_movies
router.post('/', create_log_movie );

//api/log_movies/get
router.get('/', get_log_movies);

//api/log_movies/{id}
router.get('/:id', get_one_log_movie);

//api/log_movies/delete/{id}
router.delete('/:id', delete_log_movie);

//api/log_movies/put/{id}
router.put('/:id', update_log_movies);

export default router;
