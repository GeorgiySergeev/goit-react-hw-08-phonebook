export const selectIsLogedIn = state => state.auth.isLoggedIn;

export const selectUserName = state =>
  state.auth.user ? state.auth.user.name : null;
