export default ({ dispatch }) => next => async action => {
  const { payload } = action;
  if (!payload || !payload.then) {
    return next(action);
  }
  const { data } = await payload;
  dispatch({ ...action, payload: data });
};
