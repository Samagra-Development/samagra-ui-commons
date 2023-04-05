// /*
//  * SPDX-FileCopyrightText: 2023 Zextras <https://samagra.gov.in>
//  *
//  * SPDX-License-Identifier: AGPL-3.0-only
//  */

// /** @type {import("eslint").Linter.Config} */

// // This eslint configuration file (and tsconfig.lintstaged.json) is being used only by lint-staged

// module.exports = {
// 	extends: ['./node_modules/samagra-ui-configs/rules/eslint.js'],
// 	root: true,
//     parserOptions: {
// 	  tsconfigRootDir: __dirname,
// 	  project: ['./tsconfig.lintstaged.json'],
// 	},
// 	// extends: ['eslint-config-base'],
// 	plugins: ['notice', 'unused-imports'],
// 	rules: {
// 		'notice/notice': [
// 			'error',
// 			{
// 				templateFile: '.reuse/template.js'
// 			}
// 		],
// 		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
// 		'unused-imports/no-unused-imports': 'error',
// 		'unused-imports/no-unused-vars': [
// 			'warn',
// 			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
// 		]
// 	}
// };

/** @type {import("eslint").Linter.Config} */

// This eslint configuration file (and tsconfig.lintstaged.json) is being used only by lint-staged

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.lintstaged.json'],
  },
  extends: ['eslint-config-base'],
};
