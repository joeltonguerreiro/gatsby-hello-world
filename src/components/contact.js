import React from "react"
import styled from "styled-components"

import {LayoutContainer} from "./layout"

const WrapperContact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 

const StyledInput = styled.input`
    width: 100%;
`

const StyledTextArea = styled.textarea`
    width: 100%;
`

export default () => (
    <LayoutContainer>
        <WrapperContact id="contact">
            
            <StyledInput type="text">

            </StyledInput>

            <StyledTextArea rows="4" cols="50">

            </StyledTextArea>
            
            <button>Enviar</button>
        </WrapperContact>
    </LayoutContainer>
    
)