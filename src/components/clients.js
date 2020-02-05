import React from "react"
import styled from "styled-components"


const WrapperClients = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 200px 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

`

const Client = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    
    &:hover {
        cursor: pointer;
    }

` 

export default () => (
    <WrapperClients>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
    </WrapperClients>
)