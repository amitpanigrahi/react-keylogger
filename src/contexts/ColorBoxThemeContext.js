import React, {useCallback, useMemo, useState} from "react";
import Keypress from "keypress.js";

const ColorBoxThemeContext = React.createContext({})


const listener = new Keypress.Listener();

export const ColorBoxThemeContextProvider = ({children}) => {
    const [activeShortcuts, setActiveShortcuts] = useState({})
    const handleShortcutTrigger = useCallback(({combo = ""}) => {
        setActiveShortcuts(prevState => {
            if (prevState[combo]) {
                let newShortcuts = {...prevState};
                delete newShortcuts[combo];
                return newShortcuts;
            } else {
                return ({...prevState, [combo]: true})
            }
        })
    }, [])
    return (
        <ColorBoxThemeContext.Provider value={{
            listener,
            activeShortcuts,
            handleShortcutTrigger
        }}>
            {children}
        </ColorBoxThemeContext.Provider>
    )
}

export default ColorBoxThemeContext;
