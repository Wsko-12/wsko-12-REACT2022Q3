import { IStore } from 'store/Store';
import { ICardFormValues } from 'pages/form/CardFormWithUseForm/CardForm';
import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TFormPayloads = {
  [EStoreReducerActions.SetFormValue]: {
    field: keyof ICardFormValues;
    // how to create here like "this.field"
    // value: ICardFormValues[this.field];
    // because if I add a generic I have to create generics in TStoreReducerAction also
    value: ICardFormValues[keyof ICardFormValues];
  };
};

export type TFormAction = ActionMap<TFormPayloads>[keyof TFormPayloads];
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
