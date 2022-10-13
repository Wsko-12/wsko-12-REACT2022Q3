import CharacterCard from 'components/CharacterCard/CharacterCard';
import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
interface ICharactersListProps {
  characters: ICharacter[];
}

const CharactersList = memo<ICharactersListProps>(({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <CharacterCard key={character.id} characterData={character} />
      ))}
    </>
  );
});

export default CharactersList;
