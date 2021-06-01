const express = require('express');
const router = express.Router();
const {track, trackingStats} = require('../controller/track.controller');

router.get('/track', (req, res) => {
    track(req, res);
})

router.get('/trackingStats', (req, res) => {
    trackingStats(req, res);
})

module.exports = router;
