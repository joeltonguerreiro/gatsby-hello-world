import React from "react"
import styled from "styled-components"
import {LayoutContainer, defaultColors} from "../layout"

import Client from "./client"
import ViewMore from "../buttons/ViewMore"

import {WrapperClients, WrapperViewMore} from "./styles"

export default () => (
    <LayoutContainer>
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
        
        <WrapperViewMore>
            <ViewMore></ViewMore>
        </WrapperViewMore>
    
    </LayoutContainer>
)