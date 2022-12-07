import UserCardList from 'components/UserCardList/UserCardList';
import CardForm from 'pages/form/CardForm/CardForm';
import React from 'react';
import { Component } from 'react';
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

interface IFormPageStates {
  cards: IUserCardData[];
}

export default class FormPage extends Component<Record<string, never>, IFormPageStates> {
  state: IFormPageStates = {
    cards: [],
  };

  createCard = (data: IUserCardData) => {
    this.setState((state) => ({ cards: [...state.cards, data] }));
  };

  render() {
    const { cards } = this.state;
    return (
      <section className={styles['form-page__wrapper']}>
        <CardForm createCard={this.createCard} />
        <div className={styles['form-page__content']}>
          <UserCardList cards={cards} />
        </div>
      </section>
    );
  }
}
