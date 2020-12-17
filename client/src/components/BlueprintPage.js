import styled from 'styled-components'

export default function BlueprintPage({title}) {
    return(
        <Page>
            <h2>{title}</h2>
        </Page>
    )
}

const Page = styled.section`
    height: 100%;
    padding: 1.2rem 1.2rem 50rem;

    h2 {
        margin: 2rem;
        color: #28354A;
    }
`