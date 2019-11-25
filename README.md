# vue-stylize
This plugin provides a simple directive to apply css to text 🙂

[![NPM version](https://img.shields.io/npm/v/vue-stylize.svg?style=flat)](https://www.npmjs.com/package/vue-stylize) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![Build Status](https://travis-ci.org/shadskii/vue-stylize.svg?branch=master)](https://travis-ci.org/shadskii/vue-stylize)
[![codecov](https://codecov.io/gh/shadskii/vue-stylize/branch/master/graph/badge.svg)](https://codecov.io/gh/shadskii/vue-stylize)
## Installation
Install `vue-stylize`

```
# With NPM
npm i vue-stylize -P

# With Yarn
yarn add vue-stylize
```

## Getting started
In your script entry point:

```js
import Vue from 'vue';
import VueStylize from 'vue-stylize'

Vue.use(VueStylize)
```
Now you are all setup to use the plugin.

## Usage

`v-stylize` can take either a single string or an array of strings. These strings will be added to any escaped elements within the text of the element it is applied to.

Any text between `[[` and `]]` is escaped.

## Examples

### Single class example
```html
<div v-stylize="'hello world'">
  The quick brown fox [[jumped]] over the [[lazy dog]]
</div>
```
will produce 
```html
<div>
  The quick brown fox <span class="hello world">jumped</span> over the <span class="hello world">lazy dog</span>
</div>
```

### Multiple class example
```html
<div v-stylize="['hello', 'world']">
  The quick brown fox [[jumped]] over the [[lazy dog]]
</div>
```
will produce 
```html
<div>
  The quick brown fox <span class="hello">jumped</span> over the <span class="world">lazy dog</span>
</div>
```


# License

vue-stylize is released under the [MIT license](http://opensource.org/licenses/MIT).
