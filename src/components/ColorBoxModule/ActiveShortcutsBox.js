import React from 'react';
import s from './styles.module.scss';

const ActiveShortcutsBox = ({metaInfomap = [], }) => {
    return (
        <div className={s.descClass}>
            {metaInfomap.map(({combo, description, label}, i) => {
                return (
                    <div key={i}>
                        <p><b>Component {label}</b></p>
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
