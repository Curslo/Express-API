import  express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Hello");
});
router.get('/:id', (req, res) => {
    return res.send("Ready to get a new user by id")
})

router.post('/', (req, res) => {
    return res.send("Ready to create a new user")
})

router.put('/:id', (req, res) => {
    return res.send("Ready to update a new user by id")
})

router.delete('/:id', (req, res) => {
    return res.send("Ready to delete a user by id")
})
export default router;