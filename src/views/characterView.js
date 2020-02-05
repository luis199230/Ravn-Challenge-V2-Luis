import React from "react";
import {findCharacterById} from "../graphql/queries";
import {withApollo} from "@apollo/react-hoc";


let CharacterView = (props) => {
  return (
    <li className="list-group-item" onClick={async () => {
      let character = await props.client.query({query: findCharacterById, variables: {id: props.node.id}});
      props.setCharacter(character.data.person);
    }}>
      <div>
        <h2>{props.node.name}</h2>
        <p>{props.node.species !== null ? props.node.species.name : ''} from {props.node.homeworld.name}</p>
      </div>
      <i className="arrow"/>
    </li>
  );
};

export default withApollo(CharacterView);