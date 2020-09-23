function numUniqueEmails(emails: string[]): number {
    // set of unique emails
    const set: Set<string> = new Set();

    // iterate thru emails
    for (let i = 0; i < emails.length; i++) {
        // get the local part and domain part
        let [local, domain] = emails[i].split('@');
        // get local part (to the right of +, and with dots stripped)
        local = local.split('+')[0].replace(/\./g, '');
        // add cleaned local + domain to set
        set.add(`${local}@${domain}`);
    }

    return set.size;
}
