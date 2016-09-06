/**
 * @name 环形队列
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
class CircleSequenceQueue {

    constructor(size) {
        if (typeof size !== 'number') {
            throw new TypeError(`Incorrect type specified for CircleSequenceQueue constructor argument. 
                Expected number but actual type is : ${typeof size}`)
        }
        this.front = 0;
        this.rear = 0;
        this.count = 0;
        this.queue = new Array(size);
        this.size = size;
    }

    append(item) {
        const {size, queue} = this;
        if (this.count > 0 && this.front == this.rear) {
            return this.count;
        }
        queue[this.rear] = item;
        this.rear = (this.rear + 1) % size;
        return ++this.count;
    }

    delete() {
        if (this.isEmpty()) {
            return null;
        }
        const {queue, size} = this;
        let item = queue[this.front];
        this.front = (this.front + 1) % size;
        this.count--;
        return item;
    }

    getFront() {
        if (!this.isEmpty()) {
            return this.queue[this.front];
        }
        return null;
    }

    isEmpty() {
        return this.count === 0;
    }
}

export default CircleSequenceQueue;