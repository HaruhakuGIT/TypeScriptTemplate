/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		node: true,
		es2022: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	root: true,
};
