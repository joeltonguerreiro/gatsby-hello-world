import React from "react"

import Layout, {Section, defaultColors} from "../components/layout"
import Header from "../components/header"
import Talents from "../components/talents"
import Clients from "../components/clients"
import Plans from "../components/plans"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default () => 
<Layout>
    <Header></Header>

    <Section backgroundColor={defaultColors.backgroundPrimaryColor}>
    <Talents></Talents>
    </Section>
    
    <Section>
        <Clients></Clients>
    </Section>
    
    
    <Section backgroundColor={defaultColors.backgroundPrimaryColor}>
        <Plans></Plans>
    </Section>


    <Section>
        <Contact></Contact>
    </Section>

    <Footer></Footer>
    
</Layout>
