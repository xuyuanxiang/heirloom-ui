/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/3
 */
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