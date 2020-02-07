import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import {defaultColors} from "./layout"

import Menu from "./menu"

const WrapperHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${defaultColors.secondaryColor};
    height: 80px;
    position: fixed;
    top: 0;
`

const Header = styled.div`
    width: 1233px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    height: 50px;
    width: 50px;
    background-color: #d41a8c;
`


export default () => {

    

    return <WrapperHeader>
        <Header>
            <Logo>
            </Logo>
            <Menu></Menu>
        </Header>
    </WrapperHeader>
}