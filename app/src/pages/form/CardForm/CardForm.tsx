import React, { Component } from 'react';
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';

export default class CardForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.form__body}>
          <div>
            <User />
          </div>
          <div>
            <Delivery />
            <Personal />
          </div>
        </div>
        <div className={styles.form__footer}>
          <button className={styles.form__button} type="submit" disabled>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
