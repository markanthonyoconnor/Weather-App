const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }

})
.help()
.alias('help','h')
.argv;

//console.log(argv);
//console.log(encodeURIComponent(argv.a));


request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`,
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
        //console.log(JSON.stringify(response, undefined, 2));
    }

});