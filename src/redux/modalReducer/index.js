import { createSlice } from '@reduxjs/toolkit';


const modalSlice = createSlice({
  name: 'MODAL_INDEX',
  initialState: {
    isModalVisible: false,
    isContentVisible: false,
  },
  reducers: {
    setIsModalVisible(state, action) {
      const isModalVisibleNew = action.payload;
      state.isModalVisible = isModalVisibleNew.isModalVisible;
    },
    setIsContentVisible(state, action) {
      const isContentVisibalNew = action.payload;
      state.isContentVisible = isContentVisibalNew.isContentVisible;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { setIsModalVisible, setIsContentVisible } = actions;
export default reducer;
