import { ICharacter } from 'ts/interfaces';
import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TCharacterPayloads = {
  [EStoreReducerActions.SetCharacters]: ICharacter[];
};

export type TCharacterAction = ActionMap<TCharacterPayloads>[keyof TCharacterPayloads];

const characterReducer = (state: ICharacter[] | null, action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetCharacters:
      return action.payload;
    default:
      return state;
  }
};

export default characterReducer;

export const addCharactersAction: (payload: ICharacter[]) => TStoreReducerAction = (payload) => ({
  type: EStoreReducerActions.SetCharacters,
  payload,
});
