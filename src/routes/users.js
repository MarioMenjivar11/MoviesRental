import { Router } from 'express';
const router = Router();

import { create_user, get_users, get_one_user, delete_user, update_users } from '../controllers/users.controller'

//api/users
router.post('/', create_user );

//api/users/get
router.get('/', get_users);

//api/users/{id}
router.get('/:id', get_one_user);

//api/users/delete/{id}
router.delete('/:id', delete_user);

//api/users/put/{id}
router.put('/:id', update_users);

export default router;
