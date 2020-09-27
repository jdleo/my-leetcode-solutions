class UndergroundSystem {
    // attribute to log routes, and their trip times
    private routes: { [route: string]: number[] };
    // attribute to temporarily store checkins and their info
    private checkIns: { [id: number]: { t: number; stationName: string } };

    constructor() {
        // set attrs
        this.routes = {};
        this.checkIns = {};
    }

    checkIn(id: number, stationName: string, t: number): void {
        // temporarily store in checkins
        this.checkIns[id] = { t: t, stationName: stationName };
    }

    checkOut(id: number, stationName: string, t: number): void {
        // create route string of start=>end
        const route = `${this.checkIns[id]!.stationName}=>${stationName}`;
        // calculate total duration
        const duration = t - this.checkIns[id]!.t;
        // check if this route exists, if not, make it, then add this trip duration to it
        if (!(route in this.routes)) this.routes[route] = [];
        this.routes[route].push(duration);
        // delete key to save mem
        delete this.checkIns[id];
    }

    getAverageTime(startStation: string, endStation: string): number {
        // create route string of start=>end
        const route = `${startStation}=>${endStation}`;
        // get sum of all durations w/ this route, divide by trip count
        return (
            this.routes[route]!.reduce((acc, c) => acc + c) / this.routes[route]!.length
        );
    }
}
