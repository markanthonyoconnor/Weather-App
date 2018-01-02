const request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            var encodedAddress = encodeURIComponent(address);
            request({
                url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            }, (error, response, body) => {
            if(error){
                reject('unable to connect to google servers');
                
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.');
            }
            else if(body.status === 'OK'){
                resolve({
                   address: body.results[0].formatted_address,
                   latitude: body.results[0].geometry.location.lat,
                   longitude: body.results[0].geometry.location.lng
        
        
                });
            }
        
        });
        },1500);
       

    });
}


geocodeAddress('79 claremont Crescent Glasnevin Dublin').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMesage) => {
    console.log(errorMesage)
});  