const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathStr) => path.resolve(__dirname, pathStr);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};
