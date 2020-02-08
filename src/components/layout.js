import React from "react"
import styled from "styled-components"

import { colors } from "../styles/colors";

const Layout = styled.div`
    margin: 0 auto; 
`

const Container = styled.div`
    max-width: 1233px;
    margin: 0 auto; 
    @media screen and (max-width: 1240px) {
        margin: 0 15px;
    }
`

export const Section = styled.section`
    width: 100%;
    padding: 4rem 0;
    background-color: ${props => props.backgroundColor || 'whitesmoke'}
`

export default ({ children }) => (
    <Layout>{children}</Layout>
)

export const LayoutContainer = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export const defaultColors = colors;