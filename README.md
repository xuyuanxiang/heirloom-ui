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
    // userAgent: 'all', // auto prefix for all browsers. default: window.navigator.userAgent
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
        <Picker>
            <Picker.Column key="year">
                <Picker.Row key="year_2016" value="2016">2016年</Picker.Row>
            </Picker.Column>
            <Picker.Column key="month">
                <Picker.Row key="month_01" value="01">1月</Picker.Row>
            </Picker.Column>
            <Picker.Column key="day">
                <Picker.Row key="day_01" value="01">1日</Picker.Row>
            </Picker.Column>
        </Picker>
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

### `npm run test`

* Start up JEST engine to run all tests in `__tests__` folder

### Implement a component

```
import React, {Component, PropTypes, Children} from 'react';

const createStyleSheets = (props, context) => {
    const {styleSheets}  = context;
    const {flexBox, autoPrefix, palette, zIndex} = styleSheets || {};
    return autoPrefix({
        picker: {
            backgroundColor: palette.backgroundColor,
            width: '100%',
            height: 260,
            zIndex: zIndex.picker
        },
        pickerItems: {
            ...flexBox,
            flexDirection: 'row',
            padding: 0,
            WebkitMaskBoxImage: 'linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)'
        },
        pickerItemsCol: {
            ...flexBox,
            flex: 1,
            flexDirection: 'column',
            overflow: 'hidden',
            transitionDuration: '300ms',
            transitionTimingFunction: 'ease-out',
        },
        pickerItem: {
            ...flexBox,
            height: 36,
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'ellipsis',
            boxSizing: 'border-box'
        }
    })
};

class PickerRow extends Component {

    constructor(props) {
        super(props);
        console.debug('PickerRow: props=', props);
    }

    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object
        ])
    };

    render() {
        const styles = this.context.styleSheets;
        return (
            <div style={styles.pickerItem}>
                {this.props.children}
            </div>
        )
    }
}

class PickerColumn extends Component {

    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            styleSheets: this.context.styleSheets
        };
    }

    render() {
        const styles = this.context.styleSheets;
        return <div style={styles.pickerItemsCol}>
            {this.props.children}
        </div>
    }
}

class Picker extends Component {

    static Row = PickerRow;
    static Column = PickerColumn;

    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            styleSheets: createStyleSheets(this.props, this.context)
        };
    }

    render() {
        const styles = createStyleSheets(this.props, this.context);
        return (
            <div style={styles.picker}>
                <div style={styles.pickerItems}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Picker;
```