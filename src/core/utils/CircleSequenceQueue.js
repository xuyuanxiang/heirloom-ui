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
        const {front, rear, count} = this;
        if (count > 0 && front == rear) {
            return count;
        }
        const {size, queue} = this;
        queue[rear] = item;
        this.rear = (rear + 1) % size;
        this.count = count + 1;
        return this.count;
    }

    delete() {
        if (this.isEmpty()) {
            return null;
        }
        const {queue, size, front} = this;
        let item = queue[front];
        this.front = (front + 1) % size;
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