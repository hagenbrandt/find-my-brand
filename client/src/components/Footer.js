import styled from 'styled-components'

export default function Footer() {
    return(
        <FooterWrapper>
            <span>&copy; 2019 All Rights Reserved | Remazing</span>
            <span>Terms & conditions | Privacy Policy</span>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px;
    background: #EFF1FA;
    border-top: 1px solid  #E4E6ED;

    span {
        width: fit-content;
    }
`