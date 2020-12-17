import styled from 'styled-components'

export default function ContentWrapper() {
    return(
        <Wrapper></Wrapper>
    )
}

const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    grid-template-areas: 
    "sidebar content-header"
    "sidebar nav"
    "sidebar content";
    background: #F5F6FA;
`