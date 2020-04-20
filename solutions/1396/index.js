class UndergroundSystem {
    // class constructor
    constructor() {
        // check ins are of type {id : {checkIn time, station name}}
        this.checkIns = {};
        // trips are of type {route : [full elapsed times]}
        this.trips = {};
    }
    checkIn(id, stationName, t) {
        // log check in
        this.checkIns[id] = {
            t: t,
            stationName: stationName,
        };
    }
    checkOut(id, stationName, t) {
        // create route string
        const route = this.checkIns[id].stationName +
            '=>' +
            stationName;
        // check if this route is not in trips obj yet
        if (!(route in this.trips))
            this.trips[route] = [];
        // push elapsed time to route: trips
        this.trips[route].push(t - this.checkIns[id].t);
    }
    getAverageTime(startStation, endStation) {
        // create route string
        const route = startStation + '=>' + endStation;
        // running sum
        let sum = 0;
        // iterate thru all elapsed trip times for this route
        for (let i = 0; i < this.trips[route].length; i++) {
            // add to running sum
            sum += this.trips[route][i];
        }
        // return avg
        return sum / this.trips[route].length;
    }
}
