const getDevice = (platforms) => {
    for (const device of Object.entries(platforms)) {
        if(device[1] === true && device[0] != "isAuthoritative"){
            return device[0].replace('is', '');
        }
    }
}

module.exports = {getDevice}