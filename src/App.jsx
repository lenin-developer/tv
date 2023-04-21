import { Button, Modal } from "@/components";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalEvent = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.app}>
      <Button label="Mostrar EPG" onClick={showModalEvent} />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
