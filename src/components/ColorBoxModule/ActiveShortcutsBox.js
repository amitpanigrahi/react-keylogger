import React from 'react';
import s from './styles.module.scss';

const ActiveShortcutsBox = ({activeShortcuts, metaInfomap = [], }) => {
    return (
        <div className={s.descClass}>
            {metaInfomap.map(({combo, description, label}, i) => {
                return (
                    <div key={i}>
                        <p><b>Component {label} {activeShortcuts[combo] ? '- (active)' : ''}</b></p>
                        <div>
                            <p>{combo}: {description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ActiveShortcutsBox;
