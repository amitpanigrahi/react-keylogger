import React, {useContext} from 'react';
import KeyboardShortcut from "./KeyboardShortcut";
import s from "./styles.module.scss";
import {COMPONENT_META_MAPPING} from "./constants";
import ActiveShortcutsBox from "./ActiveShortcutsBox";
import ColorBoxThemeContext from "../../contexts/ColorBoxThemeContext";

const ColorBoxModule = () => {
    const {
        listener
    } = useContext(ColorBoxThemeContext);
    return (
        <div className={s.container}>
            {COMPONENT_META_MAPPING.map((metaInfo, i) => <KeyboardShortcut listener={listener} key={i} className={s.colorBox} metaInfo={metaInfo} />)}
            <ActiveShortcutsBox metaInfomap={COMPONENT_META_MAPPING} />
        </div>
    );
};

export default ColorBoxModule;
