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
    const {flexBox, autoPrefix, palette} = styleSheets || {};
    console.debug('palette', palette);
    return autoPrefix({
        picker: {
            backgroundColor: palette.backgroundColor
        }
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