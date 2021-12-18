import React, {useEffect, useState} from 'react';

const KeyboardShortcut = ({className, metaInfo = {}, listener}) => {
    const {
        label,
        colorChoice = [],
        combo,
    } = metaInfo;
    const [bgColorIndex, setBgColorIndex] = useState(0);
    useEffect(() => {
        listener.simple_combo(combo, () => setBgColorIndex(prevState => ((prevState + 1) % colorChoice.length)));
    }, [combo, colorChoice.length, listener])
    return (
        <div style={{backgroundColor: colorChoice[bgColorIndex]}} className={className}>
            {label}
        </div>
    );
};

export default KeyboardShortcut;
