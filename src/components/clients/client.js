import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"

import { LayoutContainer, defaultColors } from "../layout"

const Client = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${defaultColors.secondaryColor};
    transition: background-color 0.5s;
    &:hover {
        cursor: pointer;
        background-color: ${defaultColors.primaryColor}
    }

    @media screen and (max-width: 360px) {
        min-height: 200px;
    }

`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#___gatsby');


export default () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const handleOpenModal = () => {
        setModalIsOpen(true);
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return <>
        <Client onClick={handleOpenModal}>

        </Client>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            contentLabel="Example Modal"
        >
            teste modal
        </Modal>
    </>
}