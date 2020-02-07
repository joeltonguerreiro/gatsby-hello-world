import React from "react"
import styled from "styled-components"

import Clients from "./clients"

const Portfolio = styled.div`
    height: auto;
    width: 100%;
` 

export default () => (
    <Portfolio>
        <Clients></Clients>
    </Portfolio>
)