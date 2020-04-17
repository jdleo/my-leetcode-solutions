function angleClock(hour, minutes) {
    // get total time
    const time = (1 / 12) * minutes + Math.abs(hour % 12) * 5;
    // get degrees
    const deg = Math.abs(time - minutes) * 6;
    // angle
    return Math.min(deg, 360 - deg);
}
