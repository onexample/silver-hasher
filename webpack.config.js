const { name, version } = require('./package.json');

const config = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/

            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: `./dist/${name}.${version}.js`,
        path: __dirname
    }
};

module.exports = config;
