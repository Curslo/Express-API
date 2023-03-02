import  express from 'express';

import {create} from '../Controllers/users.js'

const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Hello");
});
router.get('/:id', (req, res) => {
    return res.send("Ready to get a new user by id")
})

router.post('/', (req, res) => {
    const user = req.body
    const newUser = create(user)
    return res.send(newUser)
})

router.put('/:id', (req, res) => {
    return res.send("Ready to update a new user by id")
})

router.delete('/:id', (req, res) => {
    return res.send("Ready to delete a user by id")
})

export default router;