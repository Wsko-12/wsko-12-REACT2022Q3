import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder';
import React from 'react';
import { IUserCardData } from 'ts/interfaces';
import LineWithAllowIcon from './LineWithAllowIcon/LineWithAllowIcon';
import styles from './user-card.module.css';

interface IUserCardProps {
  data: IUserCardData;
}
export default function UserCard(props: IUserCardProps) {
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
  } = props.data;

  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__image}>
          <ImagePlaceholder />
        </div>
        <div>
          <h4 className={styles.card__title}>
            {name} {surname}
            <span className="material-symbols-outlined">{gender}</span>
          </h4>
          <p className={styles.card__subtitle}>{email}</p>
          <p className={styles.card__subtitle}>{country}</p>
        </div>
      </header>
      <div className={styles.card__body}>
        <div className={styles.card__line}>
          <span>Birthday:</span> <span>{new Date(birthday).toLocaleDateString()}</span>
        </div>
        <hr />

        <h4 className={styles.card__title}>Delivery</h4>
        <div className={styles.card__line}>
          <span>Zip-code:</span> <span>{zip}</span>
        </div>
        <div className={styles.card__line}>
          <span>Date:</span> <span>{new Date(delivery).toLocaleDateString()}</span>
        </div>
        <hr />
        <h4 className={styles.card__title}>Permissions</h4>
        <LineWithAllowIcon title="Consent" allow={consent} />
        <LineWithAllowIcon title="Install browsers" allow={installBrowsers} />
        <LineWithAllowIcon title="Notifications" allow={notifications} />
      </div>
    </div>
  );
}
