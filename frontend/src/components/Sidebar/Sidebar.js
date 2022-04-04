import React from 'react'
import "./Sidebar.css"

import BlueGradient from "../../assets/blueGradient.jpg"
import { QuestionMark, Connect } from "../SVG"

import { Link } from 'react-router-dom'

export default function Sidebar({ isOpen }) {
    return (
        <div
            className={`sidebar__main ${isOpen ? "sidebar__open" : "sidebar__close"}`}
            style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url(${BlueGradient})` }}
        >

            <ul className="sidebar__list">
                <li>
                    <Link to="/signup">
                        <Connect />
                        <p>Connect</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <QuestionMark />
                        <p>What's Krpal</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
