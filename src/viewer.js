let state;

const createControllers = controllerConfigs =>
    controllerConfigs.map(async function (config) {
        if (config.connections.length !== 7) {
            return ''
        }
        console.log('config', config);
        state = config.config;
        let time=state.time*1000;
        return {pageReady: ($w) => updateWeatherInterval($w,state,time)}
    });

function updateWeatherInterval($w,state,time){
    $w("@button_role").onClick((event, $w) => {
        updateWeather($w,state);
    } );
    updateWeather($w,state);
    setInterval(async () => {
        updateWeather($w,state);
    },time)

}




async function updateWeather($w,state){
    const  {temp,date,description,uri} = await getWeather(state)
    const stringDate=date.toDateString()
    $w('@city_role').text = state.city + "," + state.country;
    $w('@degree_role').text = state.isCelsius ? temp + " C" : temp + "F";
    $w('@description_role').text =description;
    $w('@date_role').text =stringDate;
    $w('@icon_role').src=uri;
}


async function getWeather(state){
    let res={};
    let weather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + state.city + ',' + state.country + '&appid=43556639500a52c1c1019b11d77b599b')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
    res.temp = state.isCelsius ? Math.round(weather.main.temp - 273.15) : Math.round((1.8 * (weather.main.temp - 273) + 32));
    res.date=new Date(weather.dt*1000)
    res.description=weather.weather[0].description;
    res.uri='https://openweathermap.org/img/w/'+weather.weather[0].icon+'.png'
    return res;
}

module.exports = {
  initAppForPage: () =>{},
  createControllers,
  exports: {}
};
