import React from 'react';

const Link = (props) => {
  return (
    <button
      onClick={() => props.changeView(props.name)}
    //   className={props.active ? style.linkActive : style.link}
    >
      {props.name}
    </button>
  );
};

export default Link;