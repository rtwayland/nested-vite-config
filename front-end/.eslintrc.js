module.exports = {
	extends: ['../.eslintrc'],
	parserOptions: {
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: 'front-end/tsconfig.json',
			},
		},
	},
};
