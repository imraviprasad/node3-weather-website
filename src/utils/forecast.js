const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    "4517db5ffab760c7e607a441277b2279" +
    "&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather sevice", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.location.name +
          " It is currently" +
          body.current.temperature +
          "degrees"
      );
    }
  });
};

module.exports = forecast;
