import React, { useEffect, useState } from 'react'
import './style.scss'
import SwitchButton from '../../Comman/SwitchButton'
import { useDispatch, useSelector } from 'react-redux';
import { SwitchTheme } from '../../Store/Actions/SwitchTheme';
const Header = () => {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((state) => {
        return { darkTheme: state.SwitchThemeReducer }
    })

    const handleTheme = () => {
        dispatch(SwitchTheme(!darkTheme))
    }

    return (
        <nav className="nav-bar-wrapper container">
            <div className="nav-bar">
                <div className="logo">
                    <p>Task Manager</p>
                </div>
                <div className="switch-btn-wrap">
                    <SwitchButton
                        onChange={() => handleTheme()}
                        checked={darkTheme}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header
