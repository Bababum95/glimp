const path = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,
    resolve: {
        ...defaultConfig.resolve,
        fallback: {
            ...defaultConfig.resolve.fallback,
            "stream": require.resolve("stream-browserify"),
        },
    },
};
