//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExapleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../../styled";
//import { ModalButton, ModalText, ModalButtonsGrid, ModalForm } from "./styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    //const [modalIsOpen, setIsOpen] = useState(false);

    /*const openModal = () => {
        setIsOpen(true);
    }*/

   /* const closeModal = () => {
        setIsOpen(false);
    } */

    /*const loadingTasks = () => {
        setIsOpen(false);
        dispatch(fetchExapleTasks());
    }; */

    if (loading) {
        return (
          <Button
            disabled={true}
            onClick={() => dispatch(fetchExapleTasks())}
          >
            Ładowanie...
          </Button>
        );
      }
    
      return (
        <Button onClick={() => dispatch(fetchExapleTasks())}>
          Pobierz przykładowe zadania
        </Button>
      );

    /* if (loading) {
        return (
           <>
                <Button
                    onClick={openModal}
                    disabled={loading}
                >
                    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
                </Button>
                <ModalForm
                    isOpen={modalIsOpen}
                >
                    <h1>Uwaga!</h1>
                    <ModalText>Ta czynność spowoduje usunięcie wszystich obecnych zadań i zastąpienie ich przykładowaymi.<br /> Czy napewno chcesz kontynuować?</ModalText>
                    <ModalButtonsGrid>
                        <ModalButton
                            onClick={loadingTasks}
                        >
                            Tak
                        </ModalButton>
                        <ModalButton onClick={closeModal}>Nie</ModalButton>
                    </ModalButtonsGrid>
                </ModalForm>
            </>
        )
    }*/
}

export default ExampleTasksButton;