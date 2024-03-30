const ratelimit = require('express-rate-limit')

//  one registration oer day
const limiter = ratelimit({
    max: 1,
    windowMs: 24 * 60 * 60 * 1000,
    message: 'we have received too many request ,Please try after some times'
})


module.exports = {
    limiter
}