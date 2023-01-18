import React, { useEffect, useState } from 'react';
import { useModal } from '../../hooks/use.modal';
import { mockAdvisor } from '../../mocks/models.mocks';
import { Layout } from '../layout/layout';
import List from '../list/list';
import ModalSpeak from '../modal.speak/modal.speak';

function App() {
    // const {isModalOpen,handleModal}= useModal();
    // function handleOpenModal() {
    //     setTimeout(() => {
    //         if (openModal) {
    //             setOpenModal(!openModal);
    //             console.log("CLOSING MODAL")
    //         }
    //     }, 3000);
    // }

    // useEffect(() => {
    //     handleOpenModal();
    // });

    return (
        <Layout>
            <>
                <List></List>
                <ModalSpeak char={mockAdvisor}></ModalSpeak>
            </>
        </Layout>
    );
}

export default App;
