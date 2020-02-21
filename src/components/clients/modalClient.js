import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"

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

export default (props) => {

    return <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        style={customStyles}
        contentLabel="Example Modal"
    >
        {props.children}
    </Modal>
    
}