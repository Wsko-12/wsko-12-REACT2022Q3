import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
import styles from './character-modal.module.css';

interface ICharacterModalContentProps {
  data: ICharacter;
}

const CardLine = memo<{ title: string; children: React.ReactNode }>(({ title, children }) => {
  return (
    <div className={styles.line}>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  );
});

const CharacterModalContent = memo<ICharacterModalContentProps>(({ data }) => {
  // const {
  //   image,
  //   name,
  //   status,
  //   gender,
  //   species,
  //   origin: { name: origin },
  // } = data;
  // return (
  //   <div className={styles.container}>
  //     <h3 className={styles.title}>{name}</h3>
  //     <img src={image} alt={data.name} />
  //     <span>
  //       {species} | {gender}
  //     </span>
  //     <CardLine title="origin">{origin}</CardLine>
  //     <CardLine title="status">{status}</CardLine>
  //   </div>
  // );

  return <div></div>;
});

export default CharacterModalContent;
