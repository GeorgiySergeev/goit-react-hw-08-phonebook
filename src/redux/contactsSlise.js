import { createSlice } from '@reduxjs/toolkit';

import * as api from '../redux/operations';

const appState = {
  contacts: [],
  isLoading: true,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: 'contacts',

  initialState: appState,

  extraReducers: builder => {
    builder
      .addCase(api.fetchContacts.pending, handlePending)
      .addCase(api.fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(api.fetchContacts.rejected, handleRejected)
      .addCase(api.addContact.pending, handlePending)
      .addCase(api.addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(api.addContact.rejected, handleRejected)
      .addCase(api.deleteContact.pending, handlePending)
      .addCase(api.deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(api.deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlise.reducer;
