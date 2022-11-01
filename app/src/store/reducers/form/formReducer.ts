import { IStore } from 'store/Store';
import { ICardFormValues } from 'pages/form/CardFormWithUseForm/CardForm';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

interface ISetFormValueAction {
  type: EStoreReducerActions.SetFormValue;
  payload: {
    field: keyof ICardFormValues;
    // how to mark here like "this.field" without generic
    // because if use generic I have to add generic to TStoreReducerAction too
    value: ICardFormValues[keyof ICardFormValues];
  };
}

export type TFormAction = ISetFormValueAction;

const formReducer = (state: IStore['form'], action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetFormValue:
      const { field } = action.payload;
      return { ...state, [field]: action.payload.value };
    default:
      return state;
  }
};

export default formReducer;

export const setFormValueAction: <T extends keyof ICardFormValues>(
  field: T,
  value: ICardFormValues[T]
) => TStoreReducerAction = (field, value) => {
  return {
    type: EStoreReducerActions.SetFormValue,
    payload: {
      field,
      value,
    },
  };
};
