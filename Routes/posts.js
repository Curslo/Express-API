//Import express
import  express from 'express';

//Assign variable "router" to 'express.Router()'
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Ready to get all post");
});
router.get('/:id', (req, res) => {
    return res.send("Ready to get a new post by id")
})

router.post('/', (req, res) => {
    return res.send("Ready to create a new post")
})

router.put('/:id', (req, res) => {
    return res.send("Ready to update a post by id")
})

router.delete('/:id', (req, res) => {
    return res.send("Ready to delete a post by id")
})

export default router;