import styled from "styled-components"

import {defaultColors} from "../layout"

export const Menu = styled.div`
    max-width: 1233px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const MenuContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 920px) {
        display: none;
    }
`

export const MenuItem = styled.a`
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

    @media screen and (max-width: 920px) {
        margin-left: 0;
    }
`

export const SideMenu = styled.div`
    display: flex;
    position: absolute;
    right: 15px;

    @media screen and (min-width: 920px) {
        display: none;
    }
` 

export const SideMenuContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-end;
    position: fixed;
    right: ${props => props.sideMenuIsOpen ? '0' : '-200px'};
    flex-direction: column;
    height: 100%;
    background-color: #9400ff;
    top: 0;
    padding-top: 66px;
    width: 200px;

    transition: right 0.3s ease;

`

export const ButtonToggleSideMenu = styled.a`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: #000;
    z-index: 99999;
    justify-content: ${props => props.sideMenuIsOpen ? `center` : `space-evenly`};
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 920px) {
        display: none;
    }

    span {
        width: 30px;
        height: 2px;
        background-color: white;
        transition: transform 0.5s ease;
    }

    span:nth-child(1) {
        transform: ${props => props.sideMenuIsOpen ? `rotate(45deg)` : ``}
        
    }

    span:nth-child(2) {
        display: ${props => props.sideMenuIsOpen ? `none` : ``}
    }

    span:nth-child(3) {
        transform: ${props => props.sideMenuIsOpen ? `rotate(-45deg)` : ``}

    }
    
`