import DetailCharacterView from "./detailCharacterView";
import React from "react";

let getCharacteristics = (character) => {
  let data = [];
  let keys = {
    eyeColor: 'Eye Color',
    hairColor: 'Hair Color',
    skinColor: 'Skin Color',
    birthYear: 'Birth Year'
  };
  for (let i in character) {
    if (keys[i]) {
      data.push({'key': i, 'meta': keys[i], 'value': character[i]});
    }
  }
  return <DetailCharacterView data={data} title="General Information"/>;
};

let getVehicles = (character) => {
  let vehicles = character.vehicleConnection.edges;
  if(vehicles.length > 0){
    vehicles = vehicles.map(item => {
      return {key: item.node.id, meta: item.node.name};
    });
    return <DetailCharacterView data={vehicles} title="General Information"/>;
  }
};

let DetailsCharacterView = (props) => {
  return (
    <div className="detail-character">
      {getCharacteristics(props.character)}
      {getVehicles(props.character)}
    </div>
  );
};

export default DetailsCharacterView;