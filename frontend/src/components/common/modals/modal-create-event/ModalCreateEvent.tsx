import React, { FC } from "react";
import { shmoment } from "utils/date";
import { getMapEventValues } from "../helpers";
import { IModalCreateEventOptions } from 'store/modals/types';
import ModalFormEvent from "../modal-form-event/ModalFormEvent";
import { useActions, useModal } from "hooks/index";

const ModalCreateEvent: FC<IModalCreateEventOptions> = ({
  selectedDate
}) => {
  const { createEvent } = useActions();
  const { closeModalCreate } = useModal();

  const defaultEventValues = getMapEventValues({
    title: '',
    date: selectedDate
  });

  return (
    <ModalFormEvent
      textSendButton="Create"
      textSendingBtn="Creating"
      defaultEventValues={defaultEventValues}
      closeModal={closeModalCreate}
      handlerSubmit={createEvent}
    />
  )
}

export default ModalCreateEvent;
