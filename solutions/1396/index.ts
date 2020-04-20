class UndergroundSystem {
    // data fields
    private checkIns: {
        [id: number]: { t: number; stationName: string };
    };
    private trips: { [route: string]: number[] };

    // class constructor
    constructor() {
        // check ins are of type {id : {checkIn time, station name}}
        this.checkIns = {};
        // trips are of type {route : [full elapsed times]}
        this.trips = {};
    }

    checkIn(
        id: number,
        stationName: string,
        t: number
    ): void {
        // log check in
        this.checkIns[id] = {
            t: t,
            stationName: stationName,
        };
    }

    checkOut(
        id: number,
        stationName: string,
        t: number
    ): void {
        // create route string
        const route: string =
            this.checkIns[id].stationName +
            '=>' +
            stationName;

        // check if this route is not in trips obj yet
        if (!(route in this.trips)) this.trips[route] = [];
        // push elapsed time to route: trips
        this.trips[route].push(t - this.checkIns[id].t);
    }

    getAverageTime(
        startStation: string,
        endStation: string
    ): number {
        // create route string
        const route: string =
            startStation + '=>' + endStation;

        // running sum
        let sum: number = 0;

        // iterate thru all elapsed trip times for this route
        for (let i = 0; i < this.trips[route].length; i++) {
            // add to running sum
            sum += this.trips[route][i];
        }

        // return avg
        return sum / this.trips[route].length;
    }
}
