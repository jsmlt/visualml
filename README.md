![VisualML Screenshot](https://raw.githubusercontent.com/jsmlt/visualml/master/assets/screenshot.png)
 _JSMLT in action (with VisualML)_

# JSMLT: VisualML
A React application for visualization of popular supervised learning algorithms using [JSMLT](https://github.com/jsmlt/jsmlt). You can choose the machine learning algorithm you want to run, add data points to a 2-dimensional space, and run your chosen machine learning algorithm in an interactive, web-based environment.

## VisualML.io
If you want to try VisualML in your browser right away, without installing anything, go to [visualml.io](http://visualml.io): it's up and running, ready to be used!

## Installation
Currently, the VisualML environment relies on NPM and a locally linked build of JSMLT. This is a temporary solution, used during development. The steps below provide instructions on how to get VisualML running using `webpack-dev-server`.

**Step 1.** Go to a newly created directory where you want to store JSMLT and VisualML, and clone the repositories:
```
$ git clone git@github.com:jsmlt/jsmlt.git
$ git clone git@github.com:jsmlt/visualml.git
```

**Step 2.** Move to the new directory `jsmlt` (where JSMLT was just cloned) and link the package for local usage. This will allow us to make the JSMLT package available to VisualML.
```
$ cd jsmlt
$ npm link

```
**Step 3.** Move to the `visualml` directory and link the JSMLT package. This will make the local JSMLT package available for VisualML. Then, install the actual module using npm.
```
$ cd ../visualml
$ npm link @jsmlt/jsmlt
$ npm install
```

**Step 4.** Build the module using npm.
```
$ npm build
```

VisualML is now set up. You can proceed with step 5 to easily access it from a browser.

**Step 5 (optional).** VisualML includes [`webpack-dev-server`](https://webpack.github.io/docs/webpack-dev-server.html), which allows you to easily access it from your web browser. To do so, run
```
$ npm run-script dev-server
```
VisualML is now accessible from http://localhost:8080/.
