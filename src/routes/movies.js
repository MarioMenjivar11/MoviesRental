import { Router } from 'express';
const router = Router();

import { create_movie, get_movies, get_one_movie, delete_movie, update_movies } from '../controllers/movies.controller'

//api/movies
router.post('/', create_movie );

//api/movies/get
router.get('/', get_movies);

//api/movies/{id}
router.get('/:id', get_one_movie);

//api/movies/delete/{id}
router.delete('/:id', delete_movie);

//api/movies/put/{id}
router.put('/:id', update_movies);

export default router;

