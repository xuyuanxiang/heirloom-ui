/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
import React, {Component, PropTypes} from 'react';
import RefreshControl from './RefreshControl';
import {getPosition, getDistance} from './helper';
const createStyles = (props, context) => ({
    scrollView: {
    },
    image: {
        display: 'block',
        width: '100%',
        minWidth: '100%',
    }
});

class ScrollView extends Component {

    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    static propTypes = {
        direction: PropTypes.oneOf(['horizontal', 'vertical']),
        distance: PropTypes.number, // limit distance
        refreshControl: PropTypes.element,
        onScroll: PropTypes.func,
        onEndReached: PropTypes.func
    };

    static defaultProps = {
        direction: 'vertical',
        distance: 60
    };

    constructor(props) {
        super(props);
        const direction = props.direction;
        this.state = {
            start: getPosition(direction),
            end: getPosition(direction),
            distance: getDistance(direction),
        }
    }

    _onTouchStart(event) {
        console.debug('start', event.nativeEvent);
        const direction = this.props.direction;
        this.setState({start: getPosition(event, direction)});
    }

    _onTouchMove(event) {
        console.debug('move', event.nativeEvent);
        const direction = this.props.direction;
        this.setState({end: getPosition(event, direction)});

    }

    _onTouchEnd() {
        console.debug('end');
        setTimeout(()=> {
            console.debug('distance=', getDistance(this.state.start, this.state.end, this.props.direction));
        });
    }

    render() {
        const styles = createStyles(this.props, this.context);
        throw new Error('d');
        return (
            <div style={styles.scrollView}
                 onTouchStart={this._onTouchStart.bind(this)}
                 onTouchEnd={this._onTouchEnd.bind(this)}
                 onTouchMove={this._onTouchMove.bind(this)}>
            </div>
        )
    }
}

export default ScrollView;