/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/3
 */
import React, {Component, PropTypes} from 'react';


export const createStyleSheets = (props, context) => {
    const {styleSheets}  = context;
    const {flexBox, autoPrefix} = styleSheets || {};
    return autoPrefix({
        picker: flexBox
    })
};

class Picker extends Component {
    static contextTypes = {
        styleSheets: PropTypes.object.isRequired,
    };

    render() {
        const styles = createStyleSheets(this.props, this.context);
        console.debug(styles);

        return (
            <div style={styles.picker}>Picker</div>
        )
    }
}


export default Picker;