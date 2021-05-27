const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({text: 'text'});
    // try {
    //     let results = await pt4adb.all();
    //     res.json(results);
    // } catch(e) {
    //     console.log(e);
    //     res.sendStatus(500);
    // }
});

module.exports = router;