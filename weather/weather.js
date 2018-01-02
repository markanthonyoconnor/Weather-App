const request = require('request');

var getWeather = (lat,lng, callback) => {
    

    request({
        url:`https://api.forecast.io/forecast/APIKEY/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(error){
            callback('unable to connect to forecast.io servers');
        }
        else if(response.statusCode ===400){
            callback('Unable to fetch weather.');
        }
        else if(! error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
        });
        
    }
});
};
module.exports.getWeather = getWeather;