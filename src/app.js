/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/3
 */
import React from 'react';
import {render} from 'react-dom';
import {StyleProvider} from './core/styles';
import ScrollView, {RefreshControl} from './components/ScrollView';

const APP = (
    <StyleProvider>
        <ScrollView>
        </ScrollView>
    </StyleProvider>
);

let container = document.createElement('div');
document.body.appendChild(container);
render(APP, container);