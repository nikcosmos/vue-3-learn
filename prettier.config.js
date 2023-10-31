/** @type {import("prettier").Config} */
const config = {
   singleQuote: true,
   printWidth: 100,
   tabWidth: 3,
   semi: true,
   quoteProps: 'as-needed',
   bracketSpacing: false,
   plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
