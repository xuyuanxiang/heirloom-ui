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
const years = ['2016'];
const selectedYearIdx = 0;

const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
while (months.length < 12) {
    months.push(months.length + 1);
}
const selectedMonthIdx = 5;

const days = [];
while (days.length < 9) {
    days.push(days.length + 1);
}
const selectedDayIdx = 10;

const APP = (
    <StyleProvider styleSheets={myTheme}>
        <Picker>
            <Picker.Column key="year">
                {years.map((it, idx)=>
                    <Picker.Row key={`year_${it}`} value={it}
                                selected={selectedYearIdx === idx}>
                        {it}年
                    </Picker.Row>
                )}
            </Picker.Column>
            <Picker.Column key="month">
                {months.map((it, idx)=>
                    <Picker.Row key={`month_${it}`} value={it}
                                selected={selectedMonthIdx === idx}>
                        {it}月
                    </Picker.Row>
                )}
            </Picker.Column>
            <Picker.Column key="day">
                {days.map((it, idx)=>
                    <Picker.Row key={`day_${it}`} value={it}
                                selected={selectedDayIdx === idx}>
                        {it}日
                    </Picker.Row>
                )}
            </Picker.Column>
        </Picker>
    </StyleProvider>
);

let container = document.createElement('div');
document.body.appendChild(container);
render(APP, container);