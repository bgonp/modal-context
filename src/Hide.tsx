import { useModalContext } from "./ModalContext";

export const Hide = () => {
  const { hideModal } = useModalContext();

  return <button onClick={hideModal}>HIDE MODALS</button>;
};
