import React, { memo, useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUserCardData } from 'ts/interfaces';
import styles from './card-form.module.css';
import { isUserCardData } from 'ts/typeguards';
import UserInfo from './UserInfo/UserInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import PermissionsInfo from './PermissionsInfo/PermissionsInfo';
import { StoreContext } from 'api/store/Store';
import { EStoreReducerActions } from 'api/store/reducers/StoreReducer';

interface ICardFormProps {
  createCard?: (data: IUserCardData) => void;
}

export interface ICardFormValues {
  name: string;
  surname: string;
  email: string;
  birthday: string | Date;
  delivery: string | Date;
  avatar?: FileList;
  gender?: 'male' | 'female';

  country: string;
  zip: string;
  installBrowsers: boolean;
  notifications: string;
  consent: boolean;
}

const parseFormValues = (values: ICardFormValues) => {
  const avatar = values.avatar && values.avatar[0];
  const notifications = values.notifications.startsWith('I want');
  const birthday = values.birthday.toString();
  const delivery = values.delivery.toString();
  return {
    ...values,
    notifications,
    avatar,
    id: Date.now().toString(),
    birthday,
    delivery,
  };
};

const CardForm = memo<ICardFormProps>(({ createCard }) => {
  const today = new Date().toLocaleDateString('en-CA');
  const [store, dispatch] = useContext(StoreContext);

  const defaultValues = store.form;

  const { handleSubmit, register, reset, formState } = useForm<ICardFormValues>({ defaultValues });
  const { isDirty, isValid, isSubmitSuccessful } = formState;
  // I use isSubmitClicked instead of isSubmitted because
  // it's works better for submit button behavior like in requirements
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const onSubmit = (values: ICardFormValues) => {
    const parsed = parseFormValues(values);
    if (isUserCardData(parsed) && createCard) {
      createCard(parsed);
    }
  };

  useEffect(() => {
    reset();
    setIsSubmitClicked(false);
  }, [isSubmitSuccessful]);

  useEffect(() => {
    const value = isSubmitClicked ? isValid : isDirty;
    setButtonEnabled(value);
  }, [isSubmitClicked, isDirty, isValid]);

  const onFieldChange = useCallback(
    <T extends keyof ICardFormValues>(field: T, value: ICardFormValues[T]) => {
      dispatch({
        type: EStoreReducerActions.SetFormValue,
        payload: {
          field,
          value,
        },
      });
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* if i pass errors from formState they are not shown */}
      <div className={styles.body}>
        <UserInfo
          register={register}
          formState={formState}
          today={today}
          onFieldChange={onFieldChange}
        />
        <PermissionsInfo register={register} formState={formState} onFieldChange={onFieldChange} />
        <DeliveryInfo
          register={register}
          formState={formState}
          today={today}
          onFieldChange={onFieldChange}
        />
      </div>

      <footer className={styles.footer}>
        <button
          disabled={!buttonEnabled}
          type="submit"
          className={styles.button}
          onClick={() => setIsSubmitClicked(true)}
        >
          Submit
        </button>
      </footer>
    </form>
  );
});

export default CardForm;
