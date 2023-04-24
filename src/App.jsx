import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "@/store/slices/channels/channels";
import { showModal } from "@/store/slices/modal/modal";
import { getChannels } from "@/requests/claroVideo";
import { Button, Modal } from "@/components";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  const { show } = useSelector((state) => state?.modal);

  const showModalEvent = () => {
    // setShowModal(!showModal);
    dispatch(showModal());
  };

  const initChannels = async () => {
    const channels = await getChannels();
    dispatch(initData(channels));
  };

  useEffect(() => {
    initChannels();
  }, []);

  return (
    <div className={styles.app}>
      <Button label="Mostrar EPG" onClick={showModalEvent} />
      {show && <Modal />}
    </div>
  );
}

export default App;
