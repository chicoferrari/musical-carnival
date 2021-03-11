module.exports = {
    devServer: {
        disableHostCheck: true,
        sockHost: 'frontend.lemp.test',
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000,
        }
    },
};