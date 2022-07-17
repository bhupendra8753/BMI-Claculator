/*
ES-lint docs link - https://eslint.org/docs/user-guide/getting-started
ES-lint example - https://dev.to/bigyank/a-quick-guide-to-setup-eslint-with-airbnb-and-prettier-3di2
VS-code extension - ESLint
*/
module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'max-length': [
			'error',
			{
				ignoreComments: true,
				code: 120,
				comments: 150,
				tabWidth: 4,
			},
		],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'linebreak-style': ['error', 'windows'],
		indent: [2, 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': 'off',
		// 'no-console': ['error', { allow: ['warn', 'error'] }],
	},
};
