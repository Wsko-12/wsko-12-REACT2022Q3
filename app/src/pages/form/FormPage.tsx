import UserCard from 'components/UserCard/UserCard';
import CardForm from 'pages/form/CardForm/CardForm';
import React from 'react';
import { Component } from 'react';
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
export default class FormPage extends Component {
  render() {
    return (
      <section className={styles['form-page__wrapper']}>
        <CardForm />
        <div className={styles['form-page__content']}>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </section>
    );
  }
}
