import React from "react"
import styled from "styled-components"

import Clients from "./clients"

const Portfolio = styled.div`
    height: 300px;
    width: 100%;
    background-color: #f2add1;
` 

export default () => (
    <Portfolio>
        <Clients></Clients>
    </Portfolio>
)