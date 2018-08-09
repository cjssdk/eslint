General-purpose eslint linting
==============================

[![npm version](https://img.shields.io/npm/v/cjs-eslint.svg?style=flat-square)](https://www.npmjs.com/package/cjs-eslint)
[![dependencies status](https://img.shields.io/david/cjssdk/eslint.svg?style=flat-square)](https://david-dm.org/cjssdk/eslint)
[![devDependencies status](https://img.shields.io/david/dev/cjssdk/eslint.svg?style=flat-square)](https://david-dm.org/cjssdk/eslint?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)


## Installation ##

```bash
npm install cjs-eslint --save-dev
```


## Usage ##

Add file `.eslintrc.js` to your project root with the following content:

```js
module.exports = {
    extends: require.resolve('cjs-eslint')
};
```

Run linting for your project:

```bash
npx eslint .
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/cjssdk/eslint/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`cjs-eslint` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
