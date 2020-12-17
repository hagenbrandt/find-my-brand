import styled from 'styled-components'

export default function ContentHeader() {
    return(
        <Header>
          <h1 className="header">Brands</h1>
        </Header>
    )
}

const Header = styled.section`
    background: #F9FAFC;
    padding: 1.5rem;
    border-bottom: 1px solid  #E4E6ED;
    border-top: 1px solid  #E4E6ED;
    grid-area: content-header;

    .header {
        font-size: 1.2rem !important;
        color: #28354A;
    }
`