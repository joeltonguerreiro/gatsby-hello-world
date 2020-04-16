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
    height: 90px;
    position: fixed;
    top: 0;
`

const Header = styled.div`
    width: 1233px;
    display: grid;
    grid-template-columns: 50px auto;
    align-items: center;

    @media screen and (max-width: 920px) {
        display: flex;
        justify-content: center;
    }
`

const Logo = styled.a`
    height: 50px;
    width: 50px;
    background-color: #d41a8c;
`

export default () => {

    return <WrapperHeader>
        <Header>
            <Logo as={Link} to={"/"}></Logo>
            <Menu></Menu>
        </Header>
    </WrapperHeader>
}