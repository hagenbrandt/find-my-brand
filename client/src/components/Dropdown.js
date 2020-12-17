import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function Dropdown({list, setSearchTerm}) {
    const clickHandler = (event) => {
        setSearchTerm(event.target.getAttribute('data-tag'))
    }

    return(
        <DropdownWrapper>
            <h3>Your brands</h3>
            <ul className="dropdown">
                <li data-tag='' onClick={clickHandler}>All</li>
                {list.map(item => {
                    return <li data-tag={item.name} onClick={clickHandler}>{item.name}</li>
                })}
            </ul>
            <Icon className="icon -angle" name="angle up" />
          </DropdownWrapper>
    )
}

const DropdownWrapper = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-self: center;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    height: fit-content;

    &:hover .dropdown {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    &:hover .icon.-angle {
        transform: rotate(180deg) translateY(0) scale(0.6);
    }

    h3 {
        margin: 0;
        color: #28354A;
        font-weight: 400;
    }

.dropdown {
    position: absolute;
    left: 1.2rem;
    top: 1.2rem;
    background: #F5F6FA;
    display: none;
    visibility: hidden;
    opacity: 0;
    width: 90%;
    transition: height 0.5s ease;
    margin-top: 1rem;
    padding: 0;
    z-index: 10;

    li {
        width: 100%;
        border-bottom: solid 1px #E4E6ED;
        padding: 0.5rem 1rem;

        &:hover {
            background: #e8e8e8;
        }
    }
}
    .icon.-angle {
        transform: scale(0.6);
        color: #BEBEC2;
        margin: 0 !important;
    }
`