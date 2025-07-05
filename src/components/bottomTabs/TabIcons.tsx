// navigation/TabIcons.tsx
import React from 'react';
import { Routes } from '../../navigations/routes';
import { SvgImage } from '../svgImage/SvgImage';


interface Props {
    routeName: string;
    focused: boolean;
}

const TabIcons = ({ routeName, focused }: Props) => {
    const fillColor = focused ? 'rgba(1, 86, 86, 1)' : '#8e8e93';

    let iconSource;

    switch (routeName) {
        case Routes.home:
            iconSource = require('../../assets/svg/news/news.svg');
            break;
        case Routes.settings:
            iconSource = require('../../assets/svg/settings/settings.svg');
            break;
    }

    return (
        <SvgImage
            source={iconSource}
            height={24}
            width={24}
            fill={fillColor}
        />
    );
};

export default TabIcons;
