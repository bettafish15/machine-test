import { createSlice } from '@reduxjs/toolkit';
import { IModalsState } from './types';
import {
  openModalCreate,
  closeModalCreate,
} from './actions';

const initialState: IModalsState = {
  isOpenModalCreateEvent: false,
  modalCreateEventOptions: null,
  selectedDate: null
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(openModalCreate, (state, { payload }) => {
        state.isOpenModalCreateEvent = true;
        state.modalCreateEventOptions = payload;
      })
      .addCase(closeModalCreate, (state) => {
        state.isOpenModalCreateEvent = false;
        state.modalCreateEventOptions = null;
      })
  },
  reducers: {}
})

export const { reducer } = modalsSlice
