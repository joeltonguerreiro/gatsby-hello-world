import React from "react"
import styled from "styled-components"

import {defaultColors} from "../layout"

const PrimaryButton = styled.button`
    width: 120px;
    height: 40px;
    padding: 10px;
    background-color: ${defaultColors.primaryColor};
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.5s;
    &:hover {
        cursor: pointer;
        background-color: #d41a5c;
    }
` 

export default ({children}) => (
    <PrimaryButton>
        {children}
    </PrimaryButton>
)