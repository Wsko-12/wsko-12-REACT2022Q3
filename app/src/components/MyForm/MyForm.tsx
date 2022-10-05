import React, { Component } from 'react';
import { emailReg, nameReg, zipCodeReg } from 'utils/regex/regex';
import CheckboxInput from './components/CheckboxInput/CheckboxInput';
import DatePicker from './components/DatePicker/DatePicker';
import FileInput from './components/FileInput/FileInput';
import styles from './form.module.css';
import FormInput from './components/FormInput/FormInput';
import RadioSwitcher from './components/RadioSwitcher/RadioSwitcher';
import SelectInput from './components/SelectInput/SelectInput';

export default class MyForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.form__body}>
          <div>
            <FormInput
              label="name"
              placeholder="James"
              pattern={nameReg}
              required={true}
              title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
            />
            <FormInput
              label="surname"
              placeholder="Smith"
              pattern={nameReg}
              required={true}
              title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
            />

            <FormInput
              label="email"
              placeholder="example@example.com"
              required={true}
              type={'email'}
              pattern={emailReg}
              title="example@example.com or example.example@example.com or .by/.ua/.ru"
            />

            <DatePicker label="birthday" direction="past" />
            <RadioSwitcher label="gender" values={['Male', 'Female']} name="gender" />
            <FileInput label="Load avatar" />
          </div>
          <div>
            <FormInput
              label="zip-code"
              placeholder="000-000"
              pattern={zipCodeReg}
              required={true}
              title="Only numbers or number with dash (example: 000 or 000-000)"
            />

            <DatePicker label="delivery" direction="future" />

            <SelectInput
              label="country"
              required={true}
              placeholder="Select country"
              options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
            />

            <CheckboxInput label="I consent to my personal data" />
            <CheckboxInput label="Install Amigo and Yandex browser" checked={true} />
            <RadioSwitcher
              label="Notifications"
              values={[
                'I want to receive notifications about promo, sales, etc.',
                "I don't want to receive notifications about promo, sales, etc.",
              ]}
              name="notifications"
            />
          </div>
        </div>
        <div className={styles.form__footer}>
          <button className={styles.form__button} type="submit" disabled>
            Send
          </button>
        </div>
      </form>
    );
  }
}
