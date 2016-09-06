/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
import React, {Component, PropTypes} from 'react';

class RefreshControl extends Component {
    static propTypes = {
        onRefresh: PropTypes.func,
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
    };

    _onRefresh() {
        const onRefresh = this.props.onRefresh;
        typeof onRefresh === 'function' && onRefresh();
    }

    render() {
        return (
            <div>
                <p>下拉刷新</p>
            </div>
        )
    }
}

export default RefreshControl;