import UserCard from 'components/UserCard/UserCard';
import React, { memo } from 'react';
import { IUserCardData } from 'ts/interfaces';
import styles from './user-card-list.module.css';

interface IUserCardListProps {
  cards: IUserCardData[];
}
const UserCardList = memo<IUserCardListProps>(({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((data) => (
        <UserCard data={data} key={data.id} />
      ))}
    </div>
  );
});

export default UserCardList;
