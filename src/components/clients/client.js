import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { LayoutContainer, defaultColors } from "../layout"

import ModalClient from "./modalClient"

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
export default () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const handleOpenModal = () => {
        setModalIsOpen(true);
    }

    return <>
        <Client onClick={handleOpenModal}>

        </Client>

        <ModalClient isOpen={modalIsOpen}>
            sfasdfasfd
        </ModalClient>
    </>
}