/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
import React, {Component} from 'react';

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

export default PickerRow;