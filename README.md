![VisualML Screenshot](https://raw.githubusercontent.com/jsmlt/visualml/master/assets/screenshot.png)
 _JSMLT in action (with VisualML)_

# JSMLT: VisualML
A React application for visualization of popular supervised learning algorithms using [JSMLT](https://github.com/jsmlt/jsmlt). You can choose the machine learning algorithm you want to run, add data points to a 2-dimensional space, and run your chosen machine learning algorithm in an interactive, web-based environment.

## Installation
> Currently, the VisualML environment relies on NPM and a locally linked build of JSMLT. This is a temporary solution, used during development.

So, to get started, [download JSMLT](https://github.com/jsmlt/jsmlt) from GitHub and link it using
```
> npm link
```
Then, download VisualML from GitHub, and in its folder run
```
> npm link '@jsmlt/jsmlt'
```
Next, run
```
> npm start
```

VisualML is all set up: create a local web environment or upload the entire folder somewhere to see it in action.
