import styled from "styled-components"


export const StyledInput = styled.input`
    width: 240px;
    border: none;
    border-bottom: 1px solid
    #aea7fd;
    margin-bottom: 10px;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

`

export const StyledTextArea = styled.textarea`
    border: none;
    border-bottom: 1px solid
    #aea7fd;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;

    @media screen and (max-width: 767px) {
        width: 100%;
    }

`