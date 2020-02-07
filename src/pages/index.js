import React from "react"

import Layout, {Section, defaultColors} from "../components/layout"
import Header from "../components/header"
import Talents from "../components/talents"
import Portfolio from "../components/portfolio"
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
        <Portfolio></Portfolio>
    </Section>
    
    
    <Section backgroundColor={defaultColors.backgroundPrimaryColor}>
        <Plans></Plans>
    </Section>


    <Section>
        <Contact></Contact>
    </Section>

    <Footer></Footer>
    
</Layout>
