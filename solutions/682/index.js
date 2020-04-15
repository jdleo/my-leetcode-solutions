function calPoints(ops) {
    // points
    let pts = 0;
    // queue
    let queue = [];
    // iterate thru ops
    ops.forEach((op) => {
        if (op === '+') {
            // sum of last two rounds
            const sum = queue[queue.length - 1] + queue[queue.length - 2];
            queue.push(sum);
            pts += sum;
        }
        else if (op === 'D') {
            // double last round
            const dub = queue[queue.length - 1] * 2;
            queue.push(dub);
            pts += dub;
        }
        else if (op === 'C') {
            // invalidate last round and pop from queue
            pts -= queue.pop();
        }
        else {
            // push number to queue
            queue.push(parseInt(op));
            // add number to pts
            pts += parseInt(op);
        }
    });
    return pts;
}
