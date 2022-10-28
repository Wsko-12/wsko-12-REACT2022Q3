import { StoreContext } from 'api/store/Store';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React, { memo, useContext } from 'react';

const CharacterFilters = memo(() => {
  const [store, dispatch] = useContext(StoreContext);

  return (
    <div>
      <SelectInput label="Sort by name" placeholder="Select sort" options={['A-Z', 'Z-A']} />
    </div>
  );
});

export default CharacterFilters;
