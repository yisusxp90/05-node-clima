const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=861e0df564c8eba140891a996d7a3e5b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}