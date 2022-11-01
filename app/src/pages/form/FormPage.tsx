import UserCardList from 'components/UserCardList/UserCardList';
import CardForm from 'pages/form/CardFormWithUseForm/CardForm';
import React, { memo, useCallback, useState } from 'react';
import { IUserCardData } from 'ts/interfaces';
import styles from './form.module.css';
export enum ECardFormFields {
  name = 'name',
  surname = 'surname',
  email = 'email',
  birthday = 'birthday',
  gender = 'gender',
  zip = 'zip',
  delivery = 'delivery',
  country = 'country',
  notifications = 'notifications',
  avatar = 'avatar',
  consentForPersonalData = 'consentForPersonalData',
  installBrowsers = 'installBrowsers',
}

const FormPage = memo(() => {
  const [cards, setCards] = useState<IUserCardData[]>([]);

  const createCard = useCallback((data: IUserCardData) => {
    setCards((prev) => [...prev, data]);
  }, []);

  return (
    <section className={styles.wrapper}>
      <CardForm createCard={createCard} />
      <div className={styles.content}>
        <UserCardList cards={cards} />
      </div>
    </section>
  );
});

export default FormPage;
