/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/3
 */
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