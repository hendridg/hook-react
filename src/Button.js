import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Button() {
    const {theme,toggle} = useContext(ThemeContext) 
    return (
        <button 
        className={`${theme}-theme`} 
        onClick={toggle}
        >
        Switch Theme
        </button>
    )
}


export default Button