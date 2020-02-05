import React from "react"
import styled from "styled-components"

const WrapperContact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
` 

export default () => (
    <WrapperContact>
        <input type="text"></input>
        <textarea rows="4" cols="50">

        </textarea>
        <button>Enviar</button>
    </WrapperContact>
)