import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Button } from "../../styled";
import { fetchExapleTasks } from "../../tasksSlice";
import { ModalButton, ModalTitel, ModalStyle, ModalText, ModalButtonsGrid } from "./styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const loadingTasks = () => {
        setIsOpen(false);
        setLoading(true);

        setTimeout(() => {
            dispatch(fetchExapleTasks());
            setLoading(false)

        }, 1500)
    };

    return (
        <>
            <Button onClick={openModal}>{loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}</Button>
            <Modal
                isOpen={modalIsOpen}
                style={ModalStyle}
            >
                <ModalTitel>Uwaga!</ModalTitel>
                <ModalText>Ta czynność spowoduje usunięcie wszystich obecnych zadań i zastąpienie ich przykładowaymi. Czy napewno chcesz kontynuować?</ModalText>
                <ModalButtonsGrid>
                    <ModalButton
                        onClick={loadingTasks}
                        disabled={loading}
                    >
                        Tak
                    </ModalButton>
                    <ModalButton onClick={closeModal}>Nie</ModalButton>
                </ModalButtonsGrid>
            </Modal>
        </>
    )
}

export default ExampleTasksButton;



/*<Button 
onClick={() => loadingTasks()}

>
   
</Button>  */