import React from "react"
import styled from "styled-components"

const Layout = styled.div`
    margin: 0 auto; 
    max-width: 920px;
    padding: 0 1rem;
`

export default ({ children }) => (
    <Layout>{children}</Layout>
)