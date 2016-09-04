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

## Contribution

### Scripts

#### `npm start` 

```
if-env NODE_ENV=production && npm run start:prod || npm run start:dev
```

* Start a webpack-dev-server for developing

#### `npm run release`

* Cleans up the output `/dist` folder
* Babel transform all source codes to the output `/dist` folder

### Implement a component

```
import React, {Component, PropTypes} from 'react';

const createStyleSheets = (props, context) => {
    const {styleSheets}  = context;
    const {flexBox, autoPrefix, palette} = styleSheets || {};
    return autoPrefix({
        picker: {
            backgroundColor: palette.backgroundColor
        }
    })
};

class Picker extends Component {
    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    render() {
        const styles = createStyleSheets(this.props, this.context);
        return (
            <div style={styles.picker}>Picker</div>
        )
    }
}

export default Picker;
```