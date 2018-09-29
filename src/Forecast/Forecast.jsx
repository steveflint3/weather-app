import React from 'react';

const Forecast = props => (
  <div className="weather__info__forcast">
  {props.forecastArray && props.forecastArray.map((forecast, i)=> {
      return (
        <div>
        <p className="weather__key">
        {/* {props.mapTimeReturn()} */}
  Forecast:
          <span className="weather__value"> {forecast.weather[0].description}</span>

        </p>
        <p className="weather__key">
  Time:
          <span className="weather__value"> {forecast.dt_txt}</span>
        </p>
        </div>
      );
  })}
  </div>
);

export default Forecast;
