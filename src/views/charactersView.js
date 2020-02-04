import React, {useState} from "react";
import LayoutView from "./layoutView";
import CharacterView from "./characterView";
import DetailsCharacterView from "./detailsCharacterView";
import {withApollo} from "@apollo/react-hoc";


let CharactersView = (props) => {
  let [character, setCharacter] = useState(null);
  let characterView = props.characters.map(obj => {
    return <CharacterView key={obj.node.id} node={obj.node} setCharacter={setCharacter}/>
  });

  return (
    <LayoutView>
      <section>
        <div className="row">
          <div className="col-md-3">
            <ul className="characters">
              {characterView}
            </ul>
          </div>
          <div className="col-md-9">
            {character !== null ? <DetailsCharacterView character={character}/> : ''}
          </div>
        </div>
      </section>
    </LayoutView>
  );
};

export default withApollo(CharactersView);