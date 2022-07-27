import {createSlice} from '@reduxjs/toolkit';

const storySlice = createSlice({
  name: 'story',

  initialState: {
    data: null,
    read: [],
  },

  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
    },
    loadRead: (state, action) => {
      const oldRead = state.read;
      oldRead.push(action.payload);
      state.read = oldRead;
    },
    clearRead: (state, action) => {
      state.read = [];
    },
  },
});

export const {loadData, loadRead, clearRead} = storySlice.actions;

export default storySlice.reducer;
