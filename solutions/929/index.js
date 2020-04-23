function numUniqueEmails(emails) {
    // set of emails (to ensure uniqueness)
    const set = new Set();
    // iterate thru emails
    for (const email of emails) {
        // put normalized email in set
        set.add(normalize(email));
    }
    // result is size of set
    return set.size;
}
// helper function to 'normalize' the email
function normalize(email) {
    // split email by @ sign
    const s = email.split('@');
    // get username and domain
    let [username, domain] = s;
    // remove anything after +
    username = username.split('+')[0];
    // remove dots (they all go to same email)
    username = username.split('.').join('');
    // return normalized email
    return username + '@' + domain;
}
