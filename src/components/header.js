import React from "react"

import styled from "styled-components"

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ddd;
    height: 80px;
`

export default () => (
    <Header>
        <div>Talentos</div>
        <div>Portifólio</div>
        <div>

        </div>
        <div>Planos</div>
        <div>Contato</div>
    </Header>
)