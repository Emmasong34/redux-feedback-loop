const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
        console.log('IN ROUTER JS / GET REQUEST' , result);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;