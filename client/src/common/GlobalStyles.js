import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background: #F5F6FA;
        font-family: "Roboto", sans-serif;
    }

    .content-wrapper {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: auto;
        grid-template-areas: 
        "sidebar content-header"
        "sidebar nav"
        "sidebar content";
        background: #F5F6FA;
    }

    li {
        list-style-type: none;
    }

    a {
        color: inherit !important;
    }

    .-bell {
        align-self: center;
        font-size: 20px !important;
        height: auto !important;
        margin: 0 !important;
        color: #444;
    }
`