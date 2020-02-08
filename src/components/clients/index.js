import React from "react"
import styled from "styled-components"
import {LayoutContainer, defaultColors} from "../layout"

import Client from "./client"
import PrimaryButton from "../buttons/PrimaryButton"

import {WrapperClients, WrapperViewMore} from "./styles"

export default () => (
    <LayoutContainer>
        <WrapperClients id="clients">
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
        </WrapperClients>
        
        <WrapperViewMore>
            <PrimaryButton>Ver mais</PrimaryButton>
        </WrapperViewMore>
    
    </LayoutContainer>
)