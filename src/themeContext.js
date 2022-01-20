import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark")

    function toggle() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}