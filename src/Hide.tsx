import { useModalContext } from "./ModalContext";

export const Hide = () => {
  const { hideModal } = useModalContext();
  console.log("render0");

  return <button onClick={hideModal}>HIDE MODALS</button>;
};
