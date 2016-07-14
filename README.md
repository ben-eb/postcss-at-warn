# [postcss][postcss]-at-warn [![Build Status](https://travis-ci.org/ben-eb/postcss-at-warn.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-at-warn.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/postcss-at-warn.svg)][deps]

> `@warn` for PostCSS.


## Install

With [npm](https://npmjs.org/package/postcss-at-warn) do:

```
npm install postcss-at-warn --save
```


## Example

```scss
.mistyrose {
    @warn ".mistyrose has been deprecated, please use .rebeccapurple";
    color: mistyrose;  
}
```

When this file is processed, the `@warn` directive will be removed from the file
and the message printed to the console.



## API

### atWarn([options])

#### options

##### silent

Type: `boolean`  
Default: `false`

Set this to `true` to use your own logger for the output of this module.


## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub>Ben Briggs</sub>](http://beneb.info)<br />[💻](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) [📖](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) 👀 [⚠️](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors] specification. Contributions of
any kind welcome!


## License

MIT © [Ben Briggs](http://beneb.info)


[all-contributors]: https://github.com/kentcdodds/all-contributors
[ci]:      https://travis-ci.org/ben-eb/postcss-at-warn
[deps]:    https://gemnasium.com/ben-eb/postcss-at-warn
[npm]:     http://badge.fury.io/js/postcss-at-warn
[postcss]: https://github.com/postcss/postcss
