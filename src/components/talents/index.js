import React from "react"
import styled from "styled-components"

import {LayoutContainer, defaultColors} from "../layout"

const Talents = styled.div`
    height: 400px;
    width: 100%;
    background-color: ${defaultColors.secondaryColor};
` 

export default () => (
    <LayoutContainer>
        <Talents id="talents"></Talents>
    </LayoutContainer>
)