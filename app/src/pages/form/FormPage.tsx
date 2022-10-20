import UserCardList from 'components/UserCardList/UserCardList';
import CardForm from 'pages/form/CardForm/CardForm';
import React, { memo, useState } from 'react';
import { IUserCardData } from 'ts/interfaces';
import styles from './form.module.css';
export enum CardFormFields {
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

  function createCard(data: IUserCardData) {
    setCards((prev) => [...prev, data]);
  }

  return (
    <section className={styles['form-page__wrapper']}>
      <CardForm createCard={createCard} />
      <div className={styles['form-page__content']}>
        <UserCardList cards={cards} />
      </div>
    </section>
  );
});

export default FormPage;
