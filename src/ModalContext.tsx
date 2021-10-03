import {
  createContext,
  FC,
  ReactPortal,
  useContext,
  useMemo,
  useState
} from "react";
import { createPortal } from "react-dom";

const MODAL_CONATINER_ID = "modal-container";

type ModalActions = {
  showModal: <P extends Object>(Modal: FC<P>, props: P) => void;
  hideModal: () => void;
};

const modalContainer = document.getElementById(MODAL_CONATINER_ID);

const ModalContext = createContext<ModalActions | null>(null);

export const ModalProvider: FC = ({ children }) => {
  if (!modalContainer) throw new Error("No modal container");

  const [portal, setPortal] = useState<ReactPortal | null>(null);

  const modalActions = useMemo(
    () => ({
      showModal: <P extends Object>(Modal: FC<P>, props: P) =>
        setPortal(createPortal(<Modal {...props} />, modalContainer)),
      hideModal: () => setPortal(null)
    }),
    []
  );

  return (
    <ModalContext.Provider value={modalActions}>
      {children}
      {portal}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("No potato father");
  return context;
};
