function subdomainVisits(cpdomains: string[]): string[] {
    // map to keep track of counts per each domain level
    const counts: Map<string, number> = new Map();

    // iterate thru visit:domain list
    for (let x of cpdomains) {
        // get visit count, and domain
        const [visits_, domain] = x.split(' ');
        const visits = parseInt(visits_);
        // split domain by .
        const levels = domain.split('.');
        // iterate thru levels backwards
        for (let i = levels.length - 1; i >= 0; i--) {
            // craft this current level as its own domain
            const domain = [...levels].splice(i, levels.length - i).join('.');
            // increment count for this domain in map
            counts.set(domain, counts.has(domain) ? counts.get(domain)! + visits : visits);
        }
    }

    // this just takes all entries in hash map, and maps each one to format
    // 'count domain'
    return [...counts.entries()].map((entry) => `${entry[1]} ${entry[0]}`);
}
