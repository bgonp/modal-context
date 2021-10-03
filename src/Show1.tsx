import { Modal } from "./Modal";
import { useModalContext } from "./ModalContext";

export const Show1 = () => {
  const { showModal } = useModalContext();
  const handleClick = () => showModal(Modal, { children: "modal 1" });

  return <button onClick={handleClick}>SHOW MODAL 1</button>;
};
