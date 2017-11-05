const request = require('request');

var encodedAddress = encodeURIComponent(address);

const geocodeAddress = request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('unable to connect to google servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that address.');
    }
    else if(body.status === 'OK'){
        console.log('Status ok ');
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`latitude is: ${body.results[0].geometry.location.lat}`);
        console.log(`longitude is: ${body.results[0].geometry.location.lng}`);
    }

});

module.exports = {
    geocodeAddress
};
