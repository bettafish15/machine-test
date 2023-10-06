import { createAction } from '@reduxjs/toolkit';
import { IModalCreateEventOptions } from './types';

export const openModalCreate = createAction<IModalCreateEventOptions>('modals/openModalCreate');

export const closeModalCreate = createAction('modals/closeModalCreate');
