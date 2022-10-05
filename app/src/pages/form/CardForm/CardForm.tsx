import React, { Component } from 'react';
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';

export type onChangeCarried = (name: string) => (e: React.SyntheticEvent) => void;

export default class CardForm extends Component {
  handleChangeCarry: onChangeCarried = (name) => (e) => {
    // console.log(name, e);
  };

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.form__body}>
          <div>
            <User onChange={this.handleChangeCarry} />
          </div>
          <div>
            <Delivery onChange={this.handleChangeCarry} />
            <Personal onChange={this.handleChangeCarry} />
          </div>
        </div>
        <div className={styles.form__footer}>
          <button className={styles.form__button} type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
