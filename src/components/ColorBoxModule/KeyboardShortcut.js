import React, {useEffect, useState, memo} from 'react';

const KeyboardShortcut = ({className, handleShortcutTrigger, metaInfo = {}, listener}) => {
    const {
        label,
        colorChoice = [],
        combo,
    } = metaInfo;
    const [bgColorIndex, setBgColorIndex] = useState(0);
    useEffect(() => {
        listener.simple_combo(combo, () => {
            setBgColorIndex(prevState => ((prevState + 1) % colorChoice.length));
            handleShortcutTrigger({combo});
        });
        return () => {
            listener.unregister_combo(combo)
        }
    }, [combo, colorChoice.length, listener])
    return (
        <div style={{backgroundColor: colorChoice[bgColorIndex]}} className={className}>
            {label}
        </div>
    );
};

export default memo(KeyboardShortcut);
