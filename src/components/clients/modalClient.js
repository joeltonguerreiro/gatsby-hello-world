import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"

import { LayoutContainer, defaultColors } from "../layout"

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

const StyledModalContent = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`

Modal.setAppElement('#___gatsby');

export default (props) => {

    return <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <StyledModalContent>
            <img src='https://via.placeholder.com/600x400.png?text=clientes' width={'100%'} height={'100%'} >

            </img>
        </StyledModalContent>
        
    </Modal>
    
}