import React, { useState } from "react"

import talentCircle from '../../assets/talent_circle.png'

import {LayoutContainer, defaultColors} from "../layout"

import {Talents, TalentCreation, TalentName, TalentDescription,
    TalentSocialMedia, TalentPrinting, TalentCircle} from './styles';


export default () => {
    const [talentCircleIsHover, setTalentCircleIsHover] = useState(false);

    return (<LayoutContainer>
        <Talents id="talents">
            <TalentCreation>
                <TalentName>
                    CRIAÇÃO
                </TalentName>
                <TalentDescription>
                    Logos que refletem a identidade da marca
                </TalentDescription>
            </TalentCreation>
            <TalentSocialMedia>
                <TalentName>
                    MIDIA SOCIAL
                </TalentName>
                <TalentDescription>
                    Logos que refletem a identidade da marca
                </TalentDescription>
            </TalentSocialMedia>
            <TalentPrinting>
                <TalentName>
                    IMPRESSÃO
                </TalentName>
                <TalentDescription>
                    Logos que refletem a identidade da marca
                </TalentDescription>
            </TalentPrinting>

            <TalentCircle onMouseOver={() => setTalentCircleIsHover(true)} onMouseLeave={() => setTalentCircleIsHover(false)}>
                <img src={talentCircle} style={{width: '100%', height: '100%'}}
                    className={talentCircleIsHover ? 'animated tada' : ''}></img>
                </TalentCircle>
        </Talents>
    </LayoutContainer>)
}