/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/3
 */
import React, {Component, PropTypes, Children} from 'react';
import {merge} from 'lodash';

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
            justifyContent: 'center',
            padding: 0,
            fontSize: 24,
            height: '100%',
            perspective: 1200,
            WebkitMaskBoxImage: 'linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)'
        },
        pickerItemsCol: {
            maxHeight: '100%',
            position: 'relative',
            overflow: 'hidden',
            transitionDuration: '300ms',
            transitionTimingFunction: 'ease-out',
            transformStyle: 'preserve-3d'
        },
        pickerItem: {
            height: 36,
            lineHeight: '36px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: '#707274',
            boxSizing: 'border-box',
            transformOrigin: 'center center -110px',
            backfaceVisibility: 'hidden',
            transitionTimingFunction: 'ease-out',
            transitionDuration: '300ms'
        }
    })
};

class Picker extends Component {
    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            styleSheets: merge(this.context.styleSheets, createStyleSheets(this.props, this.context))
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