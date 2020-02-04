import React from "react";

let DetailCharacterView = (props) => {
  return (<div>
    <h3>{props.title}</h3>
    <ul>
      {props.data.map(item => {
        return (
          <li className="quality" key={item.key}>
            <span className="title">{item.meta}</span>
            <span className="data">{!item.value ? '' : item.value}</span>
          </li>
        );
      })}
    </ul>
  </div>);
};

export default DetailCharacterView;