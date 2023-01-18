import React, { useEffect, useState } from 'react';
import { mockAdvisor } from '../../mocks/models.mocks';
import { Layout } from '../layout/layout';
import List from '../list/list';
import ModalSpeak from '../modal.speak/modal.speak';

function App() {
    const [openModal, setOpenModal] = useState(true);
    function handleOpenModal() {
        setTimeout(() => {
            if (openModal) {
                setOpenModal(!openModal);
                console.log("CLOSING MODAL")
            }
        }, 3000);
    }

    useEffect(() => {
        handleOpenModal();
    });

    return (
        <Layout>
            <>
                <List></List>
                <ModalSpeak
                    char={mockAdvisor}
                    openModal={openModal}
                ></ModalSpeak>
            </>
        </Layout>
    );
}

export default App;
