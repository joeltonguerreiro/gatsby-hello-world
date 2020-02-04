import React from "react"
import styled from "styled-components"


const WrapperClients = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px; 

`


const Client = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    
    &:hover {
        cursor: pointer;
    }

` 

export default () => (
    <WrapperClients>
        <Client></Client>
        <Client></Client>
        <Client></Client>
    </WrapperClients>
)