type paginationState = { page: number; total: number };
type paginationAction = {
  type: 'next' | 'prev' | 'total';
  total?: number;
};

export const paginationReducer = (state: paginationState, action: paginationAction) => {
  const { page, total } = state;
  switch (action.type) {
    case 'total':
      return { page: 1, total: action.total || 0 };
    case 'next':
      return { ...state, page: page < total ? state.page + 1 : page };
    case 'prev':
      return { ...state, page: page > 1 ? state.page - 1 : 1 };
    default:
      throw new Error();
  }
};
