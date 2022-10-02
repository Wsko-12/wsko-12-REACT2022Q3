import React, { Component } from 'react';
import { emailReg, nameReg, zipCodeReg } from 'utils/regex/regex';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import DatePicker from './DatePicker/DatePicker';
import styles from './form.module.css';
import FormInput from './FormInput/FormInput';
import SelectInput from './SelectInput/SelectInput';
export default class MyForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.form__body}>
          <div>
            <FormInput
              label="Name"
              placeholder="James"
              pattern={nameReg}
              required={true}
              title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
            />
            <FormInput
              label="Surname"
              placeholder="Smith"
              pattern={nameReg}
              required={true}
              title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
            />

            <FormInput
              label="Email"
              placeholder="example@example.com"
              required={true}
              type={'email'}
              pattern={emailReg}
              title="example@example.com or example.example@example.com or .by/.ua/.ru"
            />

            <DatePicker label="Birthday" direction="past" />
          </div>
          <div>
            <FormInput
              label="Zip-code"
              placeholder="000-000"
              pattern={zipCodeReg}
              required={true}
              title="Only numbers or number with dash (example: 000 or 000-000)"
            />

            <DatePicker label="Delivery" direction="future" />

            <SelectInput
              label="Country"
              required={true}
              placeholder="Select country"
              options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
            />

            <CheckboxInput label="I consent to my personal data" />
            <CheckboxInput label="Install Amigo and Yandex browser" checked={true} />
          </div>
          <div></div>
        </div>
        <button type="submit">Send</button>
      </form>
    );
  }
}
