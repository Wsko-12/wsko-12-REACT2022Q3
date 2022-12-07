import { ICharacter } from 'ts/interfaces';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

interface ISetCharactersAction {
  type: EStoreReducerActions.SetCharacters;
  payload: ICharacter[];
}

export type TCharacterAction = ISetCharactersAction;

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
