import React, { memo, useEffect, useState } from 'react';
import { IUserCardData } from 'ts/interfaces';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import styles from './user-card.module.css';

interface IUserCardProps {
  data: IUserCardData;
}

const UserCard = memo<IUserCardProps>(({ data }) => {
  const {
    name,
    surname,
    email,
    gender,
    country,
    birthday,
    delivery,
    zip,
    consent,
    installBrowsers,
    notifications,
    avatar,
  } = data;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onloadend = () => {
      const { result } = reader;
      if (typeof result === 'string' && result != 'data:') {
        setImageUrl(result);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <CardHeader
        imageUrl={imageUrl}
        name={name}
        surname={surname}
        gender={gender}
        email={email}
        country={country}
      />

      <CardBody
        birthday={birthday}
        zip={zip}
        delivery={delivery}
        consent={consent}
        installBrowsers={installBrowsers}
        notifications={notifications}
      />
    </div>
  );
});

export default UserCard;
