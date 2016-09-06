/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */

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
            <div style={styles.pickerItemsCol}>
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