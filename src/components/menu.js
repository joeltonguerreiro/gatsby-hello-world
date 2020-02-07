import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import {defaultColors} from "./layout"


const Menu = styled.div`
    width: 1233px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

const MenuItem = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    padding: 10px;
    margin-left: 40px;
    transition: background-color 0.5s;
    &:hover {
        background-color: ${defaultColors.primaryColor};
    }
    border-radius: 5px;
`

export default () => {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])

    return <Menu>
        <MenuItem href="#talents">Talentos</MenuItem>
        <MenuItem>Portifólio</MenuItem>
        
        <MenuItem>Planos</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
    </Menu>
}