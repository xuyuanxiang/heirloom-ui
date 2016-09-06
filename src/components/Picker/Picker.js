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

const getY = (event) => {
    try {
        const {clientY, screenY, pageY} = event.nativeEvent.touches[0];
        return {clientY, screenY, pageY};
    } catch (e) {
        return {clientY: 0, screenY: 0, pageY: 0};
    }
};

const getDistance = (startY, endY) => {
    try {
        return endY.clientY - startY.clientY;
    } catch (e) {
        return 0;
    }
};

class PickerRow extends Component {

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
        const {style, children} = this.props;
        return (
            <div style={merge(styles.pickerItem, style)}>
                {children}
            </div>
        )
    }
}

class PickerColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startY: {pageY: 0, clientY: 0, screenY: 0},
            endY: {pageY: 0, clientY: 0, screenY: 0}
        };
    }

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

    _onTouchStart(event) {
        this.setState({startY: getY(event)});
    }

    _onTouchMove(event) {
        this.setState({endY: getY(event)});

    }

    _onTouchEnd() {
        setTimeout(()=> {
            console.debug('distance=', getDistance(this.state.startY, this.state.endY));
        });
    }

    render() {
        const styles = this.context.styleSheets;
        const {style, children} = this.props;
        const {startY, endY} = this.state;
        const distance = getDistance(startY, endY);
        let items = Children.toArray(children);
        let selectedIdx = 0;
        let moveIdx = Math.ceil(distance / 36);
        for (let i = 0; i < items.length; i++) {
            let child = items[i];
            if (child.props.selected) {
                selectedIdx = i;
            }
        }
        return (
            <div style={styles.pickerItemsCol}
                 onTouchStart={this._onTouchStart.bind(this)}
                 onTouchEnd={this._onTouchEnd.bind(this)}
                 onTouchMove={this._onTouchMove.bind(this)}>
                {Children.map(children, (it, idx)=> {
                    let px = (selectedIdx - idx) * 18;
                    let deg = px;
                    let style = {transform: `transition-duration: 0ms; transform: translate3d(0px, ${px}px, 0px) rotateX(${deg}deg)`};
                    return (
                        <PickerRow key={it.key} value={it.value} style={styles.autoPrefix(style)}>
                            {it.props.children}
                        </PickerRow>
                    )
                })}
            </div>
        )
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