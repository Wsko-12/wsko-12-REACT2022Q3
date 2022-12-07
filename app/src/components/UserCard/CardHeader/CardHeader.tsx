import Icon from 'components/Icon/Icon';
import React, { memo } from 'react';
import Avatar from './Avatar/Avatar';
import styles from '../user-card.module.css';

const CardHeader = memo<{
  imageUrl: string | null;
  gender: string;
  name: string;
  surname: string;
  email: string;
  country: string;
}>(({ imageUrl, gender, name, surname, email, country }) => {
  return (
    <header className={styles.card__header}>
      <div className={styles.card__image}>
        <Avatar url={imageUrl || undefined} />
      </div>
      <div>
        <h4 className={styles.card__title}>
          {name} {surname}
          <Icon name={gender} />
        </h4>
        <p className={styles.card__subtitle}>{email}</p>
        <p className={styles.card__subtitle}>{country}</p>
      </div>
    </header>
  );
});

export default CardHeader;
