import ColorBoxModule from "./components/ColorBoxModule";
import {ColorBoxThemeContextProvider} from "./contexts/ColorBoxThemeContext";

function App() {
    return (
        <div className="App">
            <ColorBoxThemeContextProvider>
                <ColorBoxModule/>
            </ColorBoxThemeContextProvider>
        </div>
    );
}

export default App;
