/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/6
 */
import CircleSequenceQueue from '../CircleSequenceQueue';

it('constructor should throw TypeError with incorrect argument type', ()=> {
    let func1 = ()=> new CircleSequenceQueue();
    let func2 = ()=> new CircleSequenceQueue('a');
    expect(func1).toThrowError(TypeError);
    expect(func2).toThrowError(TypeError);
});

it('constructor should create an instance of CircleSequenceQueue with expected init property value', ()=> {
    let circleQueue = new CircleSequenceQueue(10);
    expect(circleQueue.size).toBe(10);
    expect(circleQueue.rear).toBe(0);
    expect(circleQueue.count).toBe(0);
    expect(circleQueue.queue.length).toBe(10);
});

it('append should return new count value', ()=> {
    let circleQueue = new CircleSequenceQueue(10);
    let count = circleQueue.append('a');
    expect(circleQueue.count).toBe(1);
    expect(count).toBe(circleQueue.count);
    expect(circleQueue.rear).toBe(1);
    expect(circleQueue.queue[circleQueue.rear - 1]).toBe('a');
});

it('append should return the same count as before when the queue is full', ()=> {
    let circleQueue = new CircleSequenceQueue(1);
    let count = circleQueue.append('a');
    expect(count).toBe(1);
    let newCount = circleQueue.append('b');
    expect(newCount).toBe(1);
});

it('delete should return an item first in', ()=> {
    let circleQueue = new CircleSequenceQueue(2);
    circleQueue.append('a');
    circleQueue.append('b');
    expect(circleQueue.front).toBe(0);
    expect(circleQueue.count).toBe(2);
    let item = circleQueue.delete();
    expect(circleQueue.front).toBe(1);
    expect(circleQueue.count).toBe(1);
    expect(item).toBe('a');
});

it('delete should return null when the queue is empty', ()=> {
    let circleQueue = new CircleSequenceQueue(1);
    circleQueue.append('a');
    let item = circleQueue.delete();
    expect(item).toBe('a');
    let next = circleQueue.delete();
    expect(next).toBe(null);
});

it('getFront should return the front item', ()=> {
    let circleQueue = new CircleSequenceQueue(3);
    circleQueue.append('a');
    circleQueue.append('b');
    circleQueue.append('c');
    let item = circleQueue.getFront();
    expect(item).toBe('a');
});

it('getFront should return the front item', ()=> {
    let circleQueue = new CircleSequenceQueue(3);
    circleQueue.append('a');
    circleQueue.append('b');
    circleQueue.append('c');
    let item = circleQueue.getFront();
    expect(item).toBe('a');
});

it('getFront should return null when the queue is empty', ()=> {
    let circleQueue = new CircleSequenceQueue(3);
    let item = circleQueue.getFront();
    expect(item).toBe(null);
});

it('isEmpty should return true when the queue contain any items', ()=> {
    let circleQueue = new CircleSequenceQueue(1);
    circleQueue.append('a');
    expect(circleQueue.isEmpty()).toBeFalsy();
});

it('isEmpty should return true when the queue is empty', ()=> {
    let circleQueue = new CircleSequenceQueue(1);
    expect(circleQueue.isEmpty()).toBeTruthy();
});

