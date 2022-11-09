import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from 'store-redux/hooks';
import { selectCharacterByID } from 'store-redux/slices/characterSlice';

const errorMessage = (
  <Link to="/">
    <p>Sorry, something went wrong</p>
    <button>Back</button>
  </Link>
);

const CharacterPage = memo(() => {
  const { id } = useParams();

  const data = useAppSelector(selectCharacterByID(id!));

  if (!data) {
    return errorMessage;
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
