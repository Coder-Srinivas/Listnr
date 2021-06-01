const Track = require('../database/models/track.model');
const { getDevice } = require('../utilities/track.utils');

const findTracks = async (url, startDate, endDate='') => {
    url = 'http://'+url;

    return await Track.find({
        url,
        createdAt: {
            $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
            $lt: new Date(new Date(endDate).setHours(23, 59, 59))
        }
    })
}

const track = async (req, res) => {

    try{
        const userAgent = req.useragent;
        const url = 'http://'+req.query.targetURL;
        const country = req.ipInfo.country;
        const device = getDevice(userAgent) || 'unknown';
        
        const track = new Track({
            url,
            country,
            device
        })
        await track.save();
    
        if(device != 'unknown'){
            res.redirect(url);
        }else{
            res.send({
                success: false,
                message: "Track added successfully. But redirection is not possible as the browser is not supported"
            });
        }
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }
}

const trackingStats = async (req, res) => {

    try{
        const { url, rangeFrom, rangeTo } = req.query;
        const userTracks = await findTracks(url, rangeFrom, rangeTo);
    
        res.send({
            success: true,
            userTracks
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }

}

module.exports = {track, trackingStats};
