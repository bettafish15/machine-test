import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useModal = () => {
  const modalsData = useTypedSelector(({ modals }) => modals);
  const {
    openModalCreate,
    closeModalCreate
  } = useActions();

  return {
    ...modalsData,
    openModalCreate,
    closeModalCreate
  };
}
