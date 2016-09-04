/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/4
 */
import InlineStylePrefixer from 'inline-style-prefixer';
import {merge} from 'lodash';
import zIndex from './zIndex';
import {defaultTheme} from './themes';
const _userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
const _defaults = merge({zIndex, userAgent: _userAgent}, defaultTheme);

export const getAutoPreFixer = (styleSheets) => {
    const userAgent = styleSheets ? styleSheets.userAgent : _userAgent;
    if (userAgent === false) {
        return (style) => style;
    } else if (userAgent === 'all' || userAgent === 'undefined') {
        return (style) => InlineStylePrefixer.prefixAll(style)
    } else {
        let prefixer = new InlineStylePrefixer({userAgent});
        return (style) => prefixer.prefix(style);
    }
};

export default class StyleSheets {

    constructor(theme, ...more) {
        merge(this, _defaults, theme, ...more);
        const {palette, zIndex, userAgent} = this;
        this.autoPrefix = getAutoPreFixer(this);
        merge(this, this.autoPrefix({
            flexBox: {
                display: 'flex'
            },
            textDanger: {
                color: palette.negativeColor
            },
            textSuccess: {
                color: palette.positiveColor
            }
        }));
    }
}
