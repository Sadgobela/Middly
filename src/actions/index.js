export const setActionsPopup = (store, value) => {
  const actionsPopup = value;

  store.setState({actionsPopup});
};

export const setUser = (store, data) => {
  const user = data;

  store.setState({user});
};
