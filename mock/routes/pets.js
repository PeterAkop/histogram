const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        return res.json(global.mockData);
    } catch (e) {
        res.status(500);
        res.json({errors: [{msg: 'Server error'}]});
    }
});


module.exports = router;

