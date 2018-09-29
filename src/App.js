import React from 'react';
import Titles from './Titles/Titles.jsx';
import Form from './Form/Form.jsx';
import Weather from './Weather/Weather.jsx';
import Forecast from './Forecast/Forecast.jsx';
import WeatherNav from './WeatherNav/WeatherNav.jsx';
// import city from '/Users/steve/Documents/projects/weather-app/src/city.json';
// api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=3585775f387b0d0cba6c5b3dc41b8167&units=metric

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      forecastArray: undefined,
      view: 'weather'
    };
  }

  viewHandler = (target) => {
    this.setState({view: target});
  };

  callForcast = async cityVal => {
    // const weatherData = []
    // const weatherTimeData = []
    const city = cityVal
    // e.preventDefault();
    // const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=40365547b01c47aff452a683bcf47ed4`);
    const data = await api_call.json();
    this.setState({
      forecastArray: data.list
    })
  }

  getWeather = async e => {
    //prevents default behavior
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //you must add &units=imperial to url to convert received temp to fahrenheit
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=40365547b01c47aff452a683bcf47ed4&units=imperial
`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: 'Please enter the value.',
      });
    }
    this.callForcast(city);
  };

  render() {
    console.log("here is the forecast array state", this.state.forecastArray)
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <WeatherNav changeView={this.viewHandler} active={this.state.view} />
                  {this.state.view === 'weather' &&
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    humidity={this.state.humidity}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  }
                  {this.state.view === 'forecast' &&
                  <Forecast convertDateTime={this.convertDateTime} forecastArray={this.state.forecastArray} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
