// data store for mapping short code -> long url
const store = new Map();

const encode = (longUrl) => {
    // store this long url to a random short code
    const x = `${Math.random()}`;
    store.set(x, longUrl);
    return x;
};

const decode = (shortUrl) => {
    // retrieve long url from short code
    return store.get(shortUrl);
};
