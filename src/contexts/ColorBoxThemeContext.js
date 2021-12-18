import React from "react";
import Keypress from "keypress.js";

const ColorBoxThemeContext = React.createContext({})


const listener = new Keypress.Listener();

export const ColorBoxThemeContextProvider = ({children}) => {
    return (
        <ColorBoxThemeContext.Provider value={{
            listener,
        }}>
            {children}
        </ColorBoxThemeContext.Provider>
    )
}

export default ColorBoxThemeContext;
