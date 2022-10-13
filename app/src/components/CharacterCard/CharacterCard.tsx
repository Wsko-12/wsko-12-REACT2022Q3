import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';

interface ICharacterCardProps {
  characterData: ICharacter;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterData }) => {
  const { name } = characterData;
  return (
    <div>
      <span>{name}</span>
    </div>
  );
});

export default CharacterCard;
