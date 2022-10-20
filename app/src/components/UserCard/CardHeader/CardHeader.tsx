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
    <header className={styles.header}>
      <div className={styles.image}>
        <Avatar url={imageUrl || undefined} />
      </div>
      <div>
        <h4 className={styles.title}>
          {name} {surname}
          <Icon name={gender} />
        </h4>
        <p className={styles.subtitle}>{email}</p>
        <p className={styles.subtitle}>{country}</p>
      </div>
    </header>
  );
});

export default CardHeader;
