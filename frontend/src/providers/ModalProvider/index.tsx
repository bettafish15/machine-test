import React, { FC } from "react";
import { useModal } from "hooks/useModal";
import { ModalCreateEvent } from "components/common/modals";

export const ModalProvider: FC = ({ children }) => {
  const {
    isOpenModalCreateEvent,
    modalCreateEventOptions
  } = useModal();
  console.log(modalCreateEventOptions);

  return (
    <>
      {isOpenModalCreateEvent && (
        <ModalCreateEvent {...modalCreateEventOptions} />
      )}
      {children}
    </>
  );
};
