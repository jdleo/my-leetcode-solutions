function numUniqueEmails(emails: string[]): number {
    // set of emails (to ensure uniqueness)
    const set: Set<string> = new Set();

    // iterate thru emails
    for (const email of emails) {
        // put normalized email in set
        set.add(normalize(email));
    }

    // result is size of set
    return set.size;
}

// helper function to 'normalize' the email
function normalize(email: string): string {
    // split email by @ sign
    const s: string[] = email.split('@');

    // get username and domain
    let [username, domain]: string[] = s;

    // remove anything after +
    username = username.split('+')[0];

    // remove dots (they all go to same email)
    username = username.split('.').join('');

    // return normalized email
    return username + '@' + domain;
}
