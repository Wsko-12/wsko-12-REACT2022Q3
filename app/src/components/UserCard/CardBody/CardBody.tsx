import Icon from 'components/Icon/Icon';
import React, { memo } from 'react';
import styles from '../user-card.module.css';

const CardLine = memo<{
  title: string;
  value: string;
}>(({ title, value }) => {
  return (
    <div className={styles.line}>
      <span>{title}</span> <span>{value}</span>
    </div>
  );
});

const LineWithAllowIcon = memo<{
  title: string;
  allow: boolean;
}>(({ title, allow }) => {
  const classNames = [styles.icon];
  if (!allow) {
    classNames.push(styles.icon_prevented);
  }

  const icon = allow ? 'check_circle' : 'cancel';

  return (
    <div
      className={styles.line}
      style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}
    >
      <span>{title}</span> <Icon name={icon} classNames={classNames.join(' ')} />
    </div>
  );
});

const CardBody = memo<{
  birthday: string;
  delivery: string;
  zip: string;
  consent: boolean;
  installBrowsers: boolean;
  notifications: boolean;
}>(({ birthday, delivery, zip, consent, installBrowsers, notifications }) => {
  return (
    <div className={styles.body}>
      <CardLine title="Birthday" value={new Date(birthday).toLocaleDateString()} />
      <hr />

      <h4 className={styles.title}>Delivery</h4>
      <CardLine title="Zip-code:" value={zip} />
      <CardLine title="Date:" value={new Date(delivery).toLocaleDateString()} />
      <hr />
      <h4 className={styles.title}>Permissions</h4>
      <LineWithAllowIcon title="Consent" allow={consent} />
      <LineWithAllowIcon title="Install browsers" allow={installBrowsers} />
      <LineWithAllowIcon title="Notifications" allow={notifications} />
    </div>
  );
});

export default CardBody;
