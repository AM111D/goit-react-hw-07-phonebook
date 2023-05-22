import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    upDate: (state, action) => (state = action.payload),
  },
});

export const { upDate } = filterSlice.actions;
