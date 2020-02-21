import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { LayoutContainer, defaultColors } from "../layout"

import ModalClient from "./modalClient"

const StyledShade = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    transition: background-color 0.5s ease;
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

const Client = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://via.placeholder.com/200x200.png?text=clientes');
    background-repeat: none;
    background-position: center;
    background-size: cover;
    &:hover {
        cursor: pointer;
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
            <StyledShade></StyledShade>
        </Client>

        <ModalClient 
            modalIsOpen={modalIsOpen}
            afterOpenModal={afterOpenModal}
            closeModal={closeModal}>
            sfasdfasfd
        </ModalClient>
    </>
}