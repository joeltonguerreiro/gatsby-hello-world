import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { LayoutContainer, defaultColors } from "../layout"

import ModalClient from "./modalClient"

const Client = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://via.placeholder.com/200x200.png?text=clientes');
    background-repeat: none;
    backogrund-position: center;
    background-size: cover;
    transition: opacity 0.5s;
    opacity: 0.5;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    @media screen and (max-width: 360px) {
        min-height: 200px;
    }

`
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

        <ModalClient 
            modalIsOpen={modalIsOpen}
            afterOpenModal={afterOpenModal}
            closeModal={closeModal}>
            sfasdfasfd
        </ModalClient>
    </>
}