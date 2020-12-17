import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function Sidebar({ list, layout }) {
    return(
        <SideBar>
            <ul className="sidebar-list">
                <li className="sidebar-list-icon">
                    <Link to="/">
                        <Icon className="icon -home" name="home"/><span>Dashboard</span>
                    </Link>
                </li>
                <li className="sidebar-list-icon">
                    <Link to="/contentmanagement">
                        <Icon className="icon -indent" name="indent"/><span>Content Management</span>
                    </Link>
                </li>
                <li className="sidebar-list-icon">
                    <Icon className="icon -chart-pie" name="chart pie"/>
                    <input className="sidebar-input" type="checkbox" id="monitoring" name="monitoring" />
                    <label className="sidebar-label" for="monitoring">Monitoring</label>
                    <Icon className="icon -angle" name="angle up" />
                    <div className="collapse-container">
                        <Link to='/cardlist'>
                            <li className="sidebar-list-icon -subelement"><Icon className="icon -lightbulb" name="lightbulb"/><span>Content</span></li>
                        </Link>
                    </div>
                </li>
                <li className="sidebar-list-icon">
                    <Icon className="icon -setting" name="setting"/>
                    <input className="sidebar-input" type="checkbox" id="account" name="account" />
                    <label className="sidebar-label" for="account">Account</label>
                    <Icon className="icon -angle" name="angle up" />
                    <div className="collapse-container">
                        <Link to="/users">
                            <li className="sidebar-list-icon -subelement"><Icon className="icon -users" name="users"/><span>Users</span></li>
                        </Link>
                    </div>
                </li>
            </ul>
        </SideBar>
    )
}

const SideBar = styled.aside`
    grid-area: sidebar;
    background: #fff;
    border-top: 1px solid  #E4E6ED;
    border-right: 1px solid  #E4E6ED;   
    color: #808EA4;
    font-size: 14px;
    padding: 20px 10px;

    .sidebar-list {
        padding: 0 0 0 20px;
    }

    .sidebar-list-icon {
        position: relative;
        list-style: none;
        width: 100%;
        margin: 20px 0;
        cursor: pointer;

        &:hover {
            color: #E9812C;
        }

        &:hover > div {
            color: #808EA4;
        }
    }

    .sidebar-list-icon.-subelement {
        &:hover {
            color: inherit;
        }
    }

    .sidebar-input {
        display: none;
    }

    .sidebar-label {
        cursor: pointer;
    }

    .icon.-angle {
        position: absolute;
        right: 12%;
    }

    .collapse-container {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease;
        margin: 0 0 0 30px;

        &:hover {
            color: #c96418 !important;
        }
    }

    .sidebar-input:checked ~ .collapse-container {
        max-height: 80px;
    }

    .sidebar-input:checked ~ .icon {
        transform: rotate(180deg);
    }

    .icon {
        font-size: 14px !important;
        width: auto !important;
        margin: 0 20px 0 0;
    }
`