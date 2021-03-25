module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:vue/vue3-essential',
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
		],
		'quotes': [
			'error',
			'single',
			{ 'allowTemplateLiterals': true },
		],
		'semi': [
			'error',
			'never',
		],
		// 多行时有，
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'vue/no-multiple-template-root': 'off',
		'object-curly-spacing': ['error', 'always'],
	},
}
