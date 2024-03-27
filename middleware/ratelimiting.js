const ratelimit = require('express-rate-limit')
const limiter = ratelimit({
    max: 3,
    windowMs: 60 * 60 * 1000,
    message: 'we have received too many request from this Ip,Please try after some times'
})


module.exports = {
    limiter
}