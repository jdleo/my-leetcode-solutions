// our data store
let storage = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
  // generate random shortcode
  const shortcode = `${Math.floor(Math.random() * 50000000)}`;

  // add to data store
  storage[shortcode] = longUrl;

  return shortcode;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = (shortUrl) => {
  // retrieve from data store
  return storage[shortUrl];
};
