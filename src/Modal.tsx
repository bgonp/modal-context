import { FC } from "react";
import { useModalContext } from "./ModalContext";

export const Modal: FC = ({ children }) => {
  const { hideModal } = useModalContext();
  return (
    <h2>
      {children}
      <button onClick={hideModal}>X</button>
    </h2>
  );
};
