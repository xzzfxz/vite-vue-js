import { defineConfig } from 'vite'
const { resolve } = require('path')

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [vue()],
	base: '/',
	resolve: {
		// 别名
		alias: {
			'@': resolve(__dirname, 'src'),
			'@style': resolve(__dirname, 'src/style'),
		},
	},
	css: {
		postcss: {
			postcssOptions: {},
			plugins: [require('autoprefixer')],
		},
		preprocessorOptions: {
			scss: {
				// 引入全局变量
				additionalData: `@import '@style/global.scss';`,
			},
		},
	},
	server: {
		port: 3000,
		open: false,  // 是否自动打开浏览器(也可以设置打开的路由--字符串)
		proxy: {
			'/api': 'http://www.baidu.com',
		},
	},
})
