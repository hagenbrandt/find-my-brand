import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Dropdown from './Dropdown'

export default function ToolBar({ searchTerm, setSearchTerm, handleChange, setLayout, layout, list }) {
    const clickHandler = (event) => {
        setLayout(event.target.getAttribute('data-tag'))
    }
    
    return(
        <ToolSection>
          <Dropdown setSearchTerm={setSearchTerm} list={list} />
          <div className="searchbar-wrapper">
            <input 
            className="input"
            type="text" 
            placeholder="Search brands..."
            value={searchTerm}
            onChange={handleChange} 
            />
            <Icon className="icon -search" name="search" />
          </div>
          <div className="icon-wrapper">
            <Icon onClick={clickHandler} data-tag="block" className={layout == 'list' ? 'icon -block -active' : 'icon -block -inactive' } name="block layout" />
            <Icon onClick={clickHandler} data-tag="list" className={layout !== 'list' ? 'icon -content -active' : 'icon -content -inactive' } name="content" />
          </div>
        </ToolSection>
    )
}

const ToolSection = styled.section`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-area: nav;
    padding: 1.2rem 4rem 1.2rem 2rem;

    .searchbar-wrapper {
        position: relative;
        grid-column-start: 2;
        grid-column-end: 4;
        width: auto;
        height: fit-content;
        padding: 7.5px;
    }

    .input {
        width: 100%;
        padding: 12px 20px;
        background-color: #F5F6FA;
        background-repeat: no-repeat;
        background-position: 98% 50%;
        display: inline-block;
        border: 1px solid #E4E6ED;
        border-radius: 4px;
        outline: none;
        color: #9DA1AC;

        &:focus + .-search {
            display: none;
        }
    }

    .icon-wrapper {
        display: grid;
        grid-template-columns: repeat(2, auto);
        align-self: center;
        justify-content: end;
        height: fit-content;
    }

    .icon {
        display: block;
        font-size: 30px !important;
    }

    .-search {
        position: absolute;
        right: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: #9FA5AD;
        font-size: 20px !important;
        transition: ease-in-out .2s;
    }

    .-block, .-content {
        cursor: pointer;
    }

    .-active {
        color: #E3E3E7;
    }
    
    .-inactive {
        color: #C0C0C3;
    }
`