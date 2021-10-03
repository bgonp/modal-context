import { Modal } from "./Modal";
import { useModalContext } from "./ModalContext";

export const Show2 = () => {
  const { showModal } = useModalContext();
  const handleClick = () => showModal(Modal, { children: "modal 2" });

  return <button onClick={handleClick}>SHOW MODAL 2</button>;
};
