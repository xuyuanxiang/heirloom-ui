/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */

const initialX = {clientX: 0, pageX: 0, screenX: 0}
    , initialY = {clientY: 0, pageY: 0, screenY: 0}
    ;

export const getPosition = (event, direction) => {
    if (typeof event === 'string') {
        direction = event;
    }

    switch (direction) {
        case "horizontal":
            if (typeof event !== 'object') {
                return initialX;
            }
            try {
                const {clientX, pageX, screenX} = event.nativeEvent.touches[0];
                return {clientX, pageX, screenX};
            } catch (e) {
                return initialX;
            }
        case "vertical":
            if (typeof event !== 'object') {
                return initialY;
            }
            try {
                const {clientY, pageY, screenY} = event.nativeEvent.touches[0];
                return {clientY, pageY, screenY};
            } catch (e) {
                return initialY;
            }
        default:
            throw new TypeError(`Incorrect value specified for getPosition argument: 'direction'. 
                Expected one of ['horizontal', 'vertical'] but actual value is : ${direction}`);
    }
};

export const getDistance = (start, end, direction) => {
    switch (direction) {
        case "horizontal":
            try {
                return end.clientX - start.clientX;
            } catch (e) {
                return 0;
            }
        case "vertical":
            try {
                return end.clientY - start.clientY;
            } catch (e) {
                return 0;
            }
        default:
            throw new TypeError(`Incorrect value specified for getPosition argument: 'direction'. 
                Expected one of ['horizontal', 'vertical'] but actual value is : ${direction}`);
    }
};