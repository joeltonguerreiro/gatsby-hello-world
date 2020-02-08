import React, {useEffect, useState} from "react"
import { Link } from "gatsby"

import {Menu, MenuContent, MenuItem, 
    SideMenu, SideMenuContent, 
    ButtonToggleSideMenu
} from "./styles"

export default () => {

    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    const handleToggleOpenMenu = () => {
        setSideMenuIsOpen(!sideMenuIsOpen);
    }

    return <>
        <Menu>
            <MenuContent sideMenuIsOpen={sideMenuIsOpen}>
                <MenuItem href="#talents">Talentos</MenuItem>
                <MenuItem href="#clients">Clientes</MenuItem>
                <MenuItem href="#plans">Planos</MenuItem>
                <MenuItem href="#contact">Contato</MenuItem>
            </MenuContent>

        </Menu>

        <SideMenu>
            <ButtonToggleSideMenu onClick={handleToggleOpenMenu}
                sideMenuIsOpen={sideMenuIsOpen}>
                <span></span>
                <span></span>
                <span></span>
            </ButtonToggleSideMenu>

            <SideMenuContent sideMenuIsOpen={sideMenuIsOpen}>
                <MenuItem>Talentos</MenuItem>
                <MenuItem>Clientes</MenuItem>
                <MenuItem>Planos</MenuItem>
                <MenuItem>Contato</MenuItem>
            </SideMenuContent>

        </SideMenu>
    </>
}