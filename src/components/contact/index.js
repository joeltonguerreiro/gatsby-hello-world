import React from "react"
import styled from "styled-components"

import {LayoutContainer, defaultColors} from "../layout"

import {StyledInput, StyledTextArea} from "../inputs"

import PrimaryButton from "../buttons/PrimaryButton"

import whatsappLogo from "../../assets/whatsappLogo.svg"

const WrapperContact = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
` 

const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const StyledWhatsappLogo = styled.a`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50px;
    height: 50px;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    img {
        width: 100%
    }
    
`

export default () => (
    <LayoutContainer>
        <WrapperContact id="contact">

            <FormContact>

                <StyledInput type="text" placeholder={"Digite seu nome"}>

                </StyledInput>
                <StyledInput type="text" placeholder={"Digite seu email"}>

                </StyledInput>

                <StyledTextArea rows="6" cols="100" placeholder={"Digite sua mensagem"}>

                </StyledTextArea>

                <PrimaryButton>Enviar</PrimaryButton>


            </FormContact>
            
            <StyledWhatsappLogo href="https://wa.me/5543999318375"
                target="_blank"
                title="Abrir chat do whatsapp">
                <img src={whatsappLogo}></img>
            </StyledWhatsappLogo>
            
        </WrapperContact>
    </LayoutContainer>
    
)