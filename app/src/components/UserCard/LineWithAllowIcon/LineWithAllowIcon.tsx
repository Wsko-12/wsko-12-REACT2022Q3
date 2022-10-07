import React from 'react';
import styles from '../user-card.module.css';

interface ILineWithAllowIconProps {
  title: string;
  allow: boolean;
}

export default function LineWithAllowIcon({ title, allow }: ILineWithAllowIconProps) {
  let style = `material-symbols-outlined ${styles['card__allow-icon']}`;
  if (!allow) {
    style += ' ' + styles['card__allow-icon_prevented'];
  }
  return (
    <div
      className={styles.card__line}
      style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}
    >
      <span>{title}</span> <span className={style}>{allow ? 'check_circle' : 'cancel'}</span>
    </div>
  );
}
