import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder';
import React from 'react';
import { IUserCardData } from 'ts/interfaces';
import LineWithAllowIcon from './LineWithAllowIcon/LineWithAllowIcon';
import styles from './user-card.module.css';

interface IUserCardProps {
  data: IUserCardData;
}
export default function UserCard(props: IUserCardProps) {
  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__image}>
          <ImagePlaceholder />
        </div>
        <div>
          <h4 className={styles.card__title}>
            name surname
            <span className="material-symbols-outlined">female</span>
          </h4>
          <p className={styles.card__subtitle}>email@email.com</p>
          <p className={styles.card__subtitle}>Country</p>
        </div>
      </header>
      <div className={styles.card__body}>
        <div className={styles.card__line}>
          <span>Birthday:</span> <span>11.11.2011</span>
        </div>
        <hr />

        <h4 className={styles.card__title}>Delivery</h4>
        <div className={styles.card__line}>
          <span>Zip-code:</span> <span>111-111</span>
        </div>
        <div className={styles.card__line}>
          <span>Date:</span> <span>11.11.2022</span>
        </div>
        <hr />
        <h4 className={styles.card__title}>Permissions</h4>
        <LineWithAllowIcon title="Consent" allow={true} />
        <LineWithAllowIcon title="Install browsers" allow={false} />
        <LineWithAllowIcon title="Notifications" allow={false} />
      </div>
    </div>
  );
}
