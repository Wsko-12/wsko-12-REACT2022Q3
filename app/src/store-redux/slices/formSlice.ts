import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardFormValues, TGender } from 'pages/form/CardFormWithUseForm/CardForm';
import { RootState } from 'store-redux';

const today = new Date().toLocaleDateString('en-CA');

const initialState: ICardFormValues = {
  name: '',
  surname: '',
  email: '',
  birthday: today,
  delivery: today,
  country: '',
  zip: '',
  installBrowsers: true,
  notifications: '',
  consent: true,
};

export type TFormFieldWithStringValue =
  | 'name'
  | 'surname'
  | 'email'
  | 'birthday'
  | 'delivery'
  | 'country'
  | 'zip'
  | 'notifications'
  | 'gender';

export const isFormFieldWithString = (value: string): value is TFormFieldWithStringValue => {
  return (
    value === 'name' ||
    value === 'surname' ||
    value === 'email' ||
    value === 'birthday' ||
    value === 'delivery' ||
    value === 'country' ||
    value === 'zip' ||
    value === 'notifications' ||
    value === 'gender'
  );
};

const isGender = (value: string): value is TGender => {
  return value === 'male' || value === 'female';
};

const formsSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStringValue: (
      state,
      action: PayloadAction<{
        field: TFormFieldWithStringValue;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      if (field === 'gender') {
        if (isGender(value)) {
          state[field] = value;
        }
      } else {
        state[field] = value;
      }
    },

    setBooleanValue: (
      state,
      action: PayloadAction<{
        field: 'installBrowsers' | 'consent';
        value: boolean;
      }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setStringValue, setBooleanValue } = formsSlice.actions;
export default formsSlice.reducer;

export const formSelector = (state: RootState) => state.form;
