export interface IModalsState {
  isOpenModalCreateEvent: boolean;
  modalCreateEventOptions: IModalCreateEventOptions | null;
  selectedDate: string | null;
}

export interface IModalCreateEventOptions {
  selectedDate: string;
}
