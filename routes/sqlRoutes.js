import { Router } from 'express';
import db from '../db/index.js'

router.get('/users/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let results = await db.one(id);
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            let results = await db.all();
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
});