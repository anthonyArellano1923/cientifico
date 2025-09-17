import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
    entry: '.src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    rules: [
        {//Manejador de lógica de JS
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
          })
    ]
} 