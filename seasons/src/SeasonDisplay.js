import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Suffocant!',
        iconName: 'sun'
    },
    winter: {
        text: 'Fresh!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    
    if (2 < month && month < 9) {
        return lat < 0 ? 'summer' : 'winter';
    } else {
        return lat >= 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (<div className={`season-display ${season}`}>
        <i className={`icon-first massive ${iconName} icon`} />
        {text}
        <i className={`icon-second massive ${iconName} icon`} />
    </div>);
};

export default SeasonDisplay;
