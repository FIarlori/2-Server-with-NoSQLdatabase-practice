const {createLogger,format,transports} = require('winston');

module.exports = createLogger({
    transports: [
        new transports.File({
            filename: `${__dirname}/../../logs/general-logs.log`,
            format:format.combine(
            format.timestamp(),
            format.json()
            ),
            maxsize: 5120000,   // Max size in bytes
            maxFiles: 5        // If a 6th file log will be created, it will delete the oldest, preserving a max of 5 files
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})
