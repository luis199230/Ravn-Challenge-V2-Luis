import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./../assets/scss/style.scss";

import {ALL_CHARACTERS} from "../queries";

import ErrorView from "../views/errorView";
import LoadingView from "../views/loadingView";
import CharactersView from "../views/charactersView";


export default function App() {
  let [characters, setCharacters] = useState([]);
  let [after, setAfter] = useState("");
  let [length] = useState(5);
  let character = useState(null);
  let [hasNext, setHasNext] = useState(false);


  const {loading, error, data} = useQuery(ALL_CHARACTERS, {
    variables: {after: after, length: length}
  });


  if (loading) return <LoadingView/>;
  if (error) return <ErrorView/>;

  characters = [...characters, ...data.allPeople.edges];
  after = data.allPeople.pageInfo.endCursor;
  hasNext = data.allPeople.pageInfo.hasNextPage;

  return (<CharactersView characters={characters} character={character}/>);
}