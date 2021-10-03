import { Hide } from "./Hide";
import { ModalProvider } from "./ModalContext";
import { Show1 } from "./Show1";
import { Show2 } from "./Show2";

export default function App() {
  return (
    <ModalProvider>
      <Show1 />
      <Show2 />
      <Hide />
    </ModalProvider>
  );
}
