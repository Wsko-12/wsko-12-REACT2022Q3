import CheckboxInput from 'components/form/CheckboxInput/CheckboxInput';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React, { memo, SyntheticEvent, useCallback } from 'react';
import { ESortingOrder } from 'ts/enums';

import {
  addGender,
  addRace,
  filtersSelector,
  removeGender,
  removeRace,
  setSortingOrder,
} from 'store-redux/slices/filtersSlice';
import { useAppDispatch, useAppSelector } from 'store-redux/hooks';

const allRaces = ['Hobbit', 'Orc', 'Goblin', 'Human', 'Elf', 'Maiar'];
const sortingOptions = ['A-Z', 'Z-A'];
const genders = ['Male', 'Female'];

const CharacterFilters = memo(() => {
  const dispatch = useAppDispatch();
  const { races, gender, name } = useAppSelector(filtersSelector);

  const onNameSortingChange = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    const sorting = e.currentTarget.value;
    dispatch(setSortingOrder(sorting === 'A-Z' ? ESortingOrder.ASC : ESortingOrder.DESC));
  }, []);

  const onRaceChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const { name, checked } = target;
    dispatch(checked ? addRace(name) : removeRace(name));
  }, []);

  const onGenderChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const { name, checked } = target;
    dispatch(checked ? addGender(name) : removeGender(name));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <SelectInput
        label="Sort by name"
        placeholder="Select sort"
        options={sortingOptions}
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
            checked={races.includes(name)}
          />
        ))}
      </div>
      <div>
        <p>Gender: </p>
        {genders.map((name) => (
          <CheckboxInput
            key={name}
            name={name}
            label={name}
            onChange={onGenderChange}
            checked={gender.includes(name)}
          />
        ))}
      </div>
    </div>
  );
});

export default CharacterFilters;
