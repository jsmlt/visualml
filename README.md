![VisualML Screenshot](https://raw.githubusercontent.com/jsmlt/visualml/master/assets/screenshot.png)
 _JSMLT in action (with VisualML). Live demo on [visualml.io](http://visualml.io)._

# JSMLT: VisualML
[![npm](https://img.shields.io/npm/v/@jsmlt/visualml.svg)](https://www.npmjs.com/package/@jsmlt/visualml)
[![npm](https://img.shields.io/npm/dm/@jsmlt/visualml.svg)](https://www.npmjs.com/package/@jsmlt/visualml)
[![GitHub stars](https://img.shields.io/github/stars/jsmlt/visualml.svg?style=social&label=Star)](https://github.com/jsmlt/visualml)

A React application for visualization of popular supervised learning algorithms using [JSMLT](https://github.com/jsmlt/jsmlt). You can choose the machine learning algorithm you want to run, add data points to a 2-dimensional space, and run your chosen machine learning algorithm in an interactive, web-based environment.

## VisualML.io
If you want to try VisualML in your browser right away, without installing anything, go to [visualml.io](http://visualml.io): it's up and running, ready to be used!

## Installation
The VisualML environment is an NPM package which can be run locally using `webpack-dev-server`. The steps below outline the process, and will get VisualML up and running within a minute!

**Step 1.** Go to a newly created directory and clone VisualML from GitHub:
```
$ git clone git@github.com:jsmlt/visualml.git
```

**Step 2.** Move to the new directory `visualml` and install the package.
```
$ cd visualml
$ npm install
```

**Step 3.** Build the module using npm.
```
$ npm build
```

VisualML is now set up. You can proceed with step 5 to easily access it from a browser.

**Step 4 (optional).** VisualML includes [`webpack-dev-server`](https://webpack.github.io/docs/webpack-dev-server.html), which allows you to easily access it from your web browser. To do so, run
```
$ npm run-script dev-server
```
VisualML is now accessible from http://localhost:8080/.
