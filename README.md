# After

adds support to ie6 & 7 to the :before and :after pseudo selectors with no dependencies or special syntax

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/alanclarke/after/master/dist/after.min.js
[max]: https://raw.github.com/alanclarke/after/master/dist/after.js

In your web page:

```html
<!--[if lt IE 8]><script type="tex/javascript" src="after.min.js"></script><![endif]-->
```

## Documentation
after.js checks if :after is unsupported in the current browser, and if so, it appends a span to every element with a :before or :after css rule, styling it appropriately.


## Build Dependencies
- node.js
- npm
- phantomjs (only for running qunit tests as part of the build process)
- 'grunt', 'requirejs' and 'grunt-requirejs-tasks' npm packages. You can install these simply by navigating to the project root folder and typing:

```bash
npm install
```

## Build
to rebuild the file from source, navigate to the project root in terminal and run 

```bash
grunt requirejs-concat
```

this will appropriately combine the source code in /src and create a concatinated and minified version in /dist

## License
Copyright (c) 2012 Alan Clarke  
Licensed under the GPL license.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.

### Installing PhantomJS

In order for the qunit task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed and in the system PATH (if you can run "phantomjs" at the command line, this task should work).

Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it.

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)
