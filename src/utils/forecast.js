const request = require('request')


const forecast = (longitude , latitude , callback) =>{
       
    const url = 'http://api.weatherstack.com/current?access_key=ce98ba60342b23bc980645dd177eb72f&query=' + longitude + ',' + latitude + '&units=m'
     // body -> using shorthand syntax
    request({url , json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect weather services' , undefined)
        }else if(body.error){
            callback('unable to find location' , undefined)
        }else{
           callback(undefined ,'Description of weather is ' + body.current.weather_descriptions[0] + '. Current Temperature at this place is ' + body.current.temperature + '. also the probablity of rain is ' + body.current.precip + '.' 
            //    decs: body.current.weather_descriptions[0],
            //    temperature: body.current.temperature,
            //    precip: body.current.precip 
           )
        }
    })
}



module.exports = forecast