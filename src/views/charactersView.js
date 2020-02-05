import React, {useState, useEffect }  from 'react';
import CharacterView from "./characterView";
import LayoutView from "./layoutView";
import DetailsCharacterView from "./detailsCharacterView";
import LoadingView from "./loadingView";

import intersectionObserver from "../observers/useObserver";

const CharactersView = ({ characters, onLoadMore }) => {
  const [observer, setElements, entries] = intersectionObserver({
    threshold: 0.5,
    root: null
  });

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onLoadMore();
      }
    });
  }, [entries, observer, onLoadMore]);

  useEffect(() => {
    const loadings = document.querySelectorAll(".loading");
    setElements(loadings);
  }, [setElements]);

  let [character, setCharacter] = useState(null);
  let characterView = characters.map(obj => {
    return <CharacterView key={obj.node.id} node={obj.node} setCharacter={setCharacter}/>;
  });

  return (
    <LayoutView>
      <section>
        <div className="row">
          <div className="col-md-3">
            <ul className="characters">
              {characterView}
              <LoadingView complete={false}/>
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

export default CharactersView;
