const request = require('request');

var getWeather = () => {
    request({
        url:`https://api.forecast.io/forecast/APIKey/53.37021069999999,-6.2856415`,
        json: true
    },(error, response, body) => {
        if(error){
            console.log('unable to connect to forecast.io servers');
        }
        else if(! error && response.statusCode === 200){
            console.log(`The temperature in :${body.timezone} is ${body.currently.temperature} fareheit`);
            // console.log(`latitude is: ${body.results[0].geometry.location.lat}`);
            // console.log(`longitude is: ${body.results[0].geometry.location.lng}`);
            // //console.log(JSON.stringify(response, undefined, 2));
        }
        else{
            console.log('Unable to fetch weather');
        }
    }); 

};
module.exports.getWeather = getWeather;