/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
import React, {Component, PropTypes} from 'react';
import RefreshControl from './RefreshControl';
import {getPosition, getDistince} from './helper';


class ScrollView extends Component {

    static propTypes = {
        direction: PropTypes.oneOf(['horizontal', 'vertical']),
        distance: PropTypes.number, // limit distance
        refreshControl: PropTypes.element,
        onScroll: PropTypes.func,
        onEndReached: PropTypes.func
    };

    static defaultProps = {
        direction: 'vertical',
        distance: 40,
        refreshControl: RefreshControl
    };

    constructor(props) {
        super(props);
        const direction = props.direction;
        this.state = {
            start: getPosition(direction),
            end: getPosition(direction),
            distance: getDistince(direction),
        }
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
        return (
            <div onTouchStart={this._onTouchStart.bind(this)}
                 onTouchEnd={this._onTouchEnd.bind(this)}
                 onTouchMove={this._onTouchMove.bind(this)}>

            </div>
        )
    }
}

export default ScrollView;