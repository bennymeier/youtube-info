const request = require('request-promise')
const cheerio = require('cheerio')
const R = require('ramda')

const defaultOpts = {
  headers: {
    Host: 'www.youtube.com',
    'User-Agent': 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US',
    Connection: 'keep-alive',
    'Cache-Control': 'max-age=0'
  }
}

module.exports = opts =>
  request(R.mergeDeepRight(defaultOpts, opts)).then(cheerio.load)

module.exports.defaultOpts = defaultOpts
