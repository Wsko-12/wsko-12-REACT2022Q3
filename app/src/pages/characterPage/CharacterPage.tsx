import { StoreContext } from 'api/store/Store';
import React, { memo, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterPage = memo(() => {
  const { id } = useParams();
  const [store, dispatch] = useContext(StoreContext);

  const data = store.characters?.find((character) => character._id === id);
  if (!data) {
    return (
      <Link to="/">
        <p>Sorry, something went wrong</p>
        <button>Back</button>
      </Link>
    );
  }

  return (
    <>
      <p>{data.birth}</p>
      <p>{data.name}</p>
      <p>{data.race}</p>
      <p>{data.gender}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
});

export default CharacterPage;
