export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectError = state => state.contacts.error;

export const getLoading = state => state.contacts.contactsReducer;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
