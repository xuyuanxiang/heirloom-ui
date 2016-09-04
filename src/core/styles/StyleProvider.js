/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/4
 */
import React, {Component, PropTypes} from 'react';
import StyleSheets from './StyleSheets';

export default class StyleProvider extends Component {
    static propTypes = {
        children: PropTypes.element,
        styleSheets: PropTypes.object,
    };

    static childContextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            styleSheets: this.props.styleSheets || new StyleSheets()
        };
    }

    render() {
        return this.props.children;
    }
}