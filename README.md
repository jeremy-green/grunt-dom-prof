# grunt-dom-prof

> Grunt plugin for dom-prof

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dom-prof --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dom-prof');
```

## The "dom_prof" task

### Overview
In your project's Gruntfile, add a section named `dom_prof` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dom_prof: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.url
Type: `String`

The url of the site to profile.

#### options.dest
Type: `String`

The report destination relative to the project root. If this is empty, then it will dump the results to the console.

#### options.raw
Type: `Boolean`
Default value: `false`

Dump the results as the JSON object.

### Usage Examples

#### Default Options
By default the file gets rendered out as a CSV.

```js
grunt.initConfig({
  dom_prof: {
    options: {
      url: 'http://www.google.com',
      dest: 'reports/report.csv'
    }
  },
});
```

#### Custom Options
If you want the JSON, specify the `raw: true` key/value pair.

```js
grunt.initConfig({
  dom_prof: {
    options: {
      url: 'http://www.google.com',
      dest: 'reports/report.json',
      raw: true
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
