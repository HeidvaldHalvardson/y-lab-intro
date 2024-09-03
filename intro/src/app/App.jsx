import {useCallback, useState} from "react";
import Button from "../shared/ui/Button/Button";
import Modal from "../shared/ui/Modal/Modal";
import AuthForm from "../features/auth/ui/AuthForm/AuthForm";

function App() {
  const [isModal, setIsModal] = useState(false)

  const onToggleModal = useCallback(() =>{
    setIsModal(!isModal)
  }, [isModal])

  return (
    <div className='app'>
      <div className='content-page'>
        <Button onClick={onToggleModal}>
          Авторизация
        </Button>
        <Modal isOpen={isModal} onClose={onToggleModal}>
          <AuthForm onClose={onToggleModal}/>
        </Modal>
      </div>
    </div>
  );
}

export default App;
