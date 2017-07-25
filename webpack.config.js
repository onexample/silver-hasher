const { name, version } = require('./package.json');

const config = {
    name: 'main',
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

const example = {
    name: 'example',
    entry: './example/main.ts',
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
        filename: `./example/main.js`,
        path: __dirname
    }
}


module.exports = [config, example];
