import { EStoreReducerActions } from 'api/store/reducers/StoreReducer';
import { StoreContext } from 'api/store/Store';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React, { memo, SyntheticEvent, useContext } from 'react';
import { ESortingOrder } from 'ts/enums';

const CharacterFilters = memo(() => {
  const [store, dispatch] = useContext(StoreContext);
  const {
    sorting: { name },
  } = store;

  const onNameSortingChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const sorting = e.currentTarget.value;
    dispatch({
      type: EStoreReducerActions.SetNameSorting,
      payload: sorting === 'A-Z' ? ESortingOrder.ASC : ESortingOrder.DESC,
    });
  };

  return (
    <div>
      <SelectInput
        label="Sort by name"
        placeholder="Select sort"
        options={['A-Z', 'Z-A']}
        defaultValue={name === ESortingOrder.ASC ? 'A-Z' : 'Z-A'}
        onChange={onNameSortingChange}
      />
    </div>
  );
});

export default CharacterFilters;
