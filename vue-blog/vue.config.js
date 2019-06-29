const webpack = require('webpack')
module.exports = {
    //部署应用包时的基本 URL
    publicPath:'/',
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'assets',
    // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
    lintOnSave: true,
    //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
    productionSourceMap: true,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
     /*   about:{
            entry: 'src/views/about/about.js',
            template: 'public/about.html',
            filename: 'about.html',
            title: 'about',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        },
        article:{
            entry: 'src/views/article/article.js',
            template: 'public/article.html',
            filename: 'article.html',
            title: 'article',
            chunks: ['chunk-vendors', 'chunk-common', 'article']
        },
        gbook:{
            entry: 'src/views/gbook/gbook.js',
            template: 'public/gbook.html',
            filename: 'gbook.html',
            title: 'gbook',
            chunks: ['chunk-vendors', 'chunk-common', 'gbook']
        },
        learn:{
            entry: 'src/views/learn/learn.js',
            template: 'public/learn.html',
            filename: 'learn.html',
            title: 'learn',
            chunks: ['chunk-vendors', 'chunk-common', 'learn']
        },
        manshenghuo:{
            entry: 'src/views/manshenghuo/manshenghuo.js',
            template: 'public/manshenghuo.html',
            filename: 'manshenghuo.html',
            title: 'manshenghuo',
            chunks: ['chunk-vendors', 'chunk-common', 'manshenghuo']
        },
        mbfx:{
            entry: 'src/views/mbfx/mbfx.js',
            template: 'public/mbfx.html',
            filename: 'mbfx.html',
            title: 'mbfx',
            chunks: ['chunk-vendors', 'chunk-common', 'mbfx']
        }*/
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,

    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8090, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地
                target: "http://localhost:8080/api",
                // 如果要代理 websockets
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            },
            '/test': { //测试
                target: 'xxx'
            },
            '/pre': { //预发布
                target: 'xxx'
            },
            '/pro': { //正式
                target: 'xxx'
            }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    }
}