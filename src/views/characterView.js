import React from "react";
import {ListGroupItem} from "reactstrap";
import {FIND_CHARACTER_BY_ID} from "../queries";
import {withApollo} from "@apollo/react-hoc";


let CharacterView = (props) => {
  return (
    <ListGroupItem onClick={async () => {
      let character = await props.client.query({query: FIND_CHARACTER_BY_ID, variables: {id: props.node.id}});
      props.setCharacter(character.data.person);
    }}>
      <div>
        <h2>{props.node.name}</h2>
        <p>{props.node.species !== null ? props.node.species.name : ''} from {props.node.homeworld.name}</p>
      </div>
      <i className="arrow"/>
    </ListGroupItem>
  );
};

export default withApollo(CharacterView);