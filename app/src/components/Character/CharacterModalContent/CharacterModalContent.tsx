import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';

interface ICharacterModalContentProps {
  data: ICharacter;
}

const CharacterModalContent = memo<ICharacterModalContentProps>(({ data }) => {
  return <div>{data.name}</div>;
});

export default CharacterModalContent;
