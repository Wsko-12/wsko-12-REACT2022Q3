// https://medium.com/swlh/react-context-with-usereducer-and-typescript-1b7bd9a1c15

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
