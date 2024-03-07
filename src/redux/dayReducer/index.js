import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const phoneSlice = createSlice({
  name: 'DAY_INDEX',
  initialState: {
    daySelected: null,
    toDaySelected: dayjs(),
  },
  reducers: {
    setDaySelected(state, action) {
      const day = action.payload;
      state.daySelected = day.daySelected;
    },
    setToDaySelected(state, action) {
      const today = action.payload;
      state.toDaySelected = today.toDaySelected;
    },
  },
});

const { actions, reducer } = phoneSlice;
export const { setDaySelected, setToDaySelected } = actions;
export default reducer;
