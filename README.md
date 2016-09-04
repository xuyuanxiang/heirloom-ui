# Heirloom UI

Heirloom UI is a set of React components that implement Shouqianba UI design style. 


## Installation

```
npm install heirloom-ui --save
```

## Usage

```
import React from 'react';
import {render} from 'react-dom';
import {StyleProvider, StyleSheets, themes, colors} from './core/styles';
import Picker from './components/Picker';

const {BLUE, GREEN, RED, GRAY, BLACK, LIGHT_GRAY} = colors;

const myTheme = new StyleSheets(themes.defaultTheme, {
    userAgent: 'all', // autofrefix for all browsers.
    base: {
        fontSize: 14,
        lineHeight: 1.4,
        color: BLACK,
        fontFamily: 'PingFangHK-Regular, Microsoft Yahei, WenQuanYi Micro Hei, "Helvetica Neue", Helvetica, Arial, sans-serif;',
    },
    spacing: {
        paddingHorizontal: 15
    },
    palette: {
        primaryColor: BLUE,
        negativeColor: RED,
        positiveColor: GREEN,
        backgroundColor: LIGHT_GRAY,
        textColor: BLACK,
        borderColor: GRAY,
    },
});

const APP = (
    <StyleProvider styleSheets={myTheme}>
        <Picker/>
    </StyleProvider>
);

let container = document.createElement('div');
document.body.appendChild(container);
render(APP, container);
```