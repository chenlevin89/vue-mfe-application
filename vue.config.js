const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    publicPath: 'http://localhost:5400',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "vueRemote",
                library: {type: "var", name: "vueRemote"},
                filename: "remoteEntry.js",
                exposes: {
                    './ContactUs': {
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