/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://samagra.gov.in>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
/*
 * SPDX-FileCopyrightText: 2021 Samagra <https://samagra.gov.in>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
module.exports = {
	extends: ['./node_modules/samagra-ui-configs/rules/eslint.js'],
	plugins: ['notice', 'unused-imports'],
	rules: {
		'notice/notice': [
			'error',
			{
				templateFile: '.reuse/template.js'
			}
		],
		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
		]
	}
	// settings: {
	// 	'import/resolver': {
	// 		node: {
	// 			moduleDirectory: ['node_modules', 'utils'],
	// 			extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx']
	// 		}
	// 	}
	// },
	// ignorePatterns: ['notice.template.ts']
};
