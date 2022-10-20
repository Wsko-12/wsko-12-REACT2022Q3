import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setValue(value);
  }

  return {
    value,
    onChange,
  };
};

export const useDataLoader = <T extends (...args: Parameters<T>) => ReturnType<T>>(loader: T) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function load(...args: Parameters<T>) {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await loader(...args);
      if (!response) {
        setIsError(true);
        return;
      }
      return response;
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isError,
    isLoading,
    load,
  };
};

export const useDefaultValidation = (onChangeCb?: (e: React.SyntheticEvent) => void) => {
  const [isValid, setIsValid] = useState(true);

  function onChange(e: React.SyntheticEvent) {
    setIsValid(true);

    if (onChangeCb) {
      onChangeCb(e);
    }
  }

  function onInvalid() {
    setIsValid(false);
  }

  return {
    isValid,
    bind: {
      onChange,
      onInvalid,
    },
  };
};
