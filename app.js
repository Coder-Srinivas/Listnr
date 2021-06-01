const express = require('express');
const app = express();
const userAgent = require('express-useragent');
const expressip = require('express-ip');
const {getDevice} = require('./utilities/track.utils');
require('dotenv').config();
require('./database/connection');

// Routes
const trackRouter = require('./routes/track.route');

app.use(express.json());
app.use(expressip().getIpInfoMiddleware);
app.use(userAgent.express());
app.use(trackRouter);

app.get('/', (req, res) => {
    const device = getDevice(req.useragent);
    const country = req.ipInfo.country;
    const message = `Hey, there you are browsing from a ${device} device from the country ${country}`;
    res.send(message);
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})