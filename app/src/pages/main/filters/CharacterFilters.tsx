import { EStoreReducerActions } from 'api/store/reducers/StoreReducer';
import { StoreContext } from 'api/store/Store';
import CheckboxInput from 'components/form/CheckboxInput/CheckboxInput';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React, { memo, SyntheticEvent, useContext } from 'react';
import { ESortingOrder } from 'ts/enums';

const CharacterFilters = memo(() => {
  const [store, dispatch] = useContext(StoreContext);
  const {
    sorting: { name, races },
  } = store;

  const allRaces = ['Hobbit', 'Orc', 'Goblin', 'Human', 'Elf', 'Maiar'];

  const onNameSortingChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const sorting = e.currentTarget.value;
    dispatch({
      type: EStoreReducerActions.SetNameSorting,
      payload: sorting === 'A-Z' ? ESortingOrder.ASC : ESortingOrder.DESC,
    });
  };

  const onRaceChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const { name, checked } = target;
    checked ? races.add(name) : races.delete(name);

    dispatch({
      type: EStoreReducerActions.SetRacesSelected,
      payload: races,
    });
  };

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <SelectInput
        label="Sort by name"
        placeholder="Select sort"
        options={['A-Z', 'Z-A']}
        defaultValue={name === ESortingOrder.ASC ? 'A-Z' : 'Z-A'}
        onChange={onNameSortingChange}
      />
      <div>
        <p>Race: </p>
        {allRaces.map((name) => (
          <CheckboxInput
            key={name}
            name={name}
            label={name}
            onChange={onRaceChange}
            checked={races.has(name)}
          />
        ))}
      </div>
    </div>
  );
});

export default CharacterFilters;
