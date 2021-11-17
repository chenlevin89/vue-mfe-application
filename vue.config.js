const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    publicPath: 'http://localhost:5400',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "vueRemoteApp",
                library: {type: "var", name: "vueRemoteApp"},
                filename: "remoteEntry.js",
                exposes: {
                    './VueMfeComponent': {
                        import: './src/main.js',
                        name: `src_components_ContactUs`
                    }
                },
                shared: ['vue', 'core-js']
            })
        ]
    },
    devServer: {
        port: 5400,
        historyApiFallback: true,
        hot:false
    }
}