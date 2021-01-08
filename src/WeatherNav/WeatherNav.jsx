import React from 'react';
import Link from './Link/Link.jsx'
// import {Nav, NavItem} from 'react-bootstrap';

const links = [
    {
      "name": "weather",
       "key": "1"
     },
     {
       "name": "forecast",
       "key": "2"
     },
  ]

const WeatherNav = (props) => {
    return(
    <div>
    { links.map((l) => {
      return (
        <Link
        
          changeView={props.changeView}
          active={props.active === l.name}
          name={l.name}
          key={l.key}
        />
      );
    }
    )}
  </div>
    );
}

export default WeatherNav;